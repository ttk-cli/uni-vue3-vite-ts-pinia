export default defineStore({
  id: 'test',
  persist: {
    // 开启持久化
    enabled: true,
    H5Storage: window?.localStorage,
    strategies: [
      {
        key: 'test',
        storage: window?.sessionStorage,
      },
    ],
  },
  state: () => {
    return {
      name: '张三',
      token: 'token...',
    }
  },
  getters: {
    fullName: (state) => {
      return state.name + '丰'
    },
  },
  actions: {
    updateName(name: string) {
      this.name = name
    },
  },
})
