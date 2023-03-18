export default defineStore({
  id: 'user',
  state: () => {
    return {
      userInfo: {
        token: 'token',
        user_id: 111
      }
    } as {
      userInfo: User.UserInfo;
    };
  },
  getters: {
    logged: (state) => {
      const { token, user_id } = state.userInfo;
      return !!(token && user_id);
    },
    token: (state) => {
      return state.userInfo.token;
    },
    userId: (state) => {
      return state.userInfo.user_id;
    }
  },
  actions: {
    setUserInfo(userInfo: User.UserInfo) {
      Object.assign(this.userInfo, userInfo);
    }
  }
});
