import { PiniaPluginContext } from 'pinia'

const isH5 = window

export interface PersistStrategy {
  key?: string
  storage?: Storage
  paths?: string[]
}

export interface PersistOptions {
  enabled: true
  H5Storage?: Storage
  strategies?: PersistStrategy[]
}

type Store = PiniaPluginContext['store']
type PartialState = Partial<Store['$state']>

declare module 'pinia' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface DefineStoreOptionsBase<S, Store> {
    persist?: PersistOptions
  }
}

export const updateStorage = (strategy: PersistStrategy, store: Store) => {
  const storage = strategy.storage
  const storeKey = strategy.key || store.$id

  if (strategy.paths) {
    const partialState = strategy.paths.reduce((finalObj, key) => {
      finalObj[key] = store.$state[key]
      return finalObj
    }, {} as PartialState)
    if (isH5 && storage) {
      storage.setItem(storeKey, JSON.stringify(partialState))
    } else {
      uni.setStorage({ key: storeKey, data: JSON.stringify(partialState) })
    }
  } else if (isH5 && storage) {
    storage.setItem(storeKey, JSON.stringify(store.$state))
  } else {
    uni.setStorage({ key: storeKey, data: JSON.stringify(store.$state) })
  }
}

export default ({ options, store }: PiniaPluginContext): void => {
  if (options.persist?.enabled) {
    const defaultStrat: PersistStrategy[] = [
      {
        key: store.$id,
        storage: options.persist?.H5Storage || window?.sessionStorage,
      },
    ]

    const strategies = options.persist?.strategies?.length
      ? options.persist?.strategies
      : defaultStrat

    strategies.forEach((strategy) => {
      const storage = strategy.storage || options.persist?.H5Storage || window?.sessionStorage
      const storeKey = strategy.key || store.$id
      let storageResult
      if (isH5) {
        storageResult = storage.getItem(storeKey)
      } else {
        storageResult = uni.getStorageSync(storeKey)
      }

      if (storageResult) {
        store.$patch(JSON.parse(storageResult))
        updateStorage(strategy, store)
      }
    })

    store.$subscribe(() => {
      strategies.forEach((strategy) => {
        updateStorage(strategy, store)
      })
    })
  }
}
