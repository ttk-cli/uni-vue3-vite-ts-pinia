// 使用proxy转换为异步化的uni方法
const uniAsync = new Proxy({} as any, {
  get(target, name) {
    return (obj) =>
      new Promise((resolve, reject) => {
        uni[name]({
          ...obj,
          success: (ret) => {
            resolve(ret)
          },
          fail: (err) => {
            reject(err)
          },
        })
      })
  },
})

export default uniAsync
