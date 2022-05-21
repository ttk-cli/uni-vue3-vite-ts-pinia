import { APP_ID, APP_VERSION } from './app'

const { token, userId } = useStore('user')

const { getSystemInfo } = useStore('app')
const systemInfo = getSystemInfo()
const { brand: device, screenWidth: swidth, screenHeight: sheight } = systemInfo

const commonParams = {
  isLoading: true,
  appid: APP_ID,
  v: APP_VERSION, // 系统版本，用于获取最新版数据
  device,
  swidth,
  sheight,
}

export function getCommonParams() {
  return Object.assign(
    { token: token.value, uuid: userId.value, timestamp: Date.now() },
    commonParams
  )
}
export function setCommonParams(params: Object) {
  Object.assign(commonParams, params)
}
