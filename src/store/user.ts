export default defineStore({
  id: 'user',
  state: () => {
    return {
      userInfo: {
        token: 'token',
        user_id: 111,
      },
    } as {
      userInfo: User.UserInfo
    }
  },
  getters: {
    logged: (state) => {
      const { token, user_id } = state.userInfo
      return !!(token && user_id)
    },
    token: (state) => {
      return state.userInfo.token
    },
    userId: (state) => {
      return state.userInfo.user_id
    },
  },
  actions: {
    setUserInfo(userInfo) {
      Object.assign(this.userInfo, userInfo)
    },
    async login(account, pwd) {
      // const { data } = await api.login({ account: 'xxx', pwd: 'xxx' })
      // this.setUserInfo(data.userInfo) // 调用另一个 action 的方法
      // const appStore = useAppStore()
      // appStore.setData(data) // 调用 app store 里的 action 方法
      // return data
    },
  },
})
