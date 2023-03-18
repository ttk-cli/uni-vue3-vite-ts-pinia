// 使用proxy转换为异步化的uni方法
const uniAsync = new Proxy({} as any, {
  get(_, name) {
    return (obj: any) =>
      new Promise((resolve, reject) => {
        uni[name]({
          ...obj,
          success: (ret: any) => {
            resolve(ret);
          },
          fail: (err: any) => {
            reject(err);
          }
        });
      });
  }
});

export default uniAsync;
