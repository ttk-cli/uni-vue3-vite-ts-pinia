import { isDevelopment, isH5 } from './platform';
import { forward } from './router';
import { getCommonParams } from '@/config/commonParams';
import env from '@/config/env';
import { hideLoading, showLoading } from '@/config/serviceLoading';

function reject(err: { errno: number; errmsg: string }) {
  const { errmsg = '抢购火爆，稍候片刻！', errno = -1 } = err;
  switch (errno) {
    case 10000:
      // 特殊异常处理
      forward('login');
      break;

    default:
      uni.showToast({
        title: errmsg
      });
      break;
  }
}

// h5环境开启代理
const apiBaseUrl = isH5 && isDevelopment ? '/api' : env.apiBaseUrl;

function baseRequest(
  method:
    | 'OPTIONS'
    | 'GET'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT'
    | undefined,
  url: string,
  data: { isLoading: any }
) {
  return new Promise((resolve) => {
    showLoading(data.isLoading);
    delete data.isLoading;
    let responseData: unknown;
    uni.request({
      url: apiBaseUrl + url,
      method,
      timeout: 20000,
      header: {
        'content-type':
          method === 'GET'
            ? 'application/json; charset=utf-8'
            : 'application/x-www-form-urlencoded'
      },
      data,
      success: (res: any) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          if (res.data.errno === 0) {
            responseData = res.data;
          } else {
            reject(res.data);
          }
        } else {
          reject({
            errno: -1,
            errmsg: '抢购火爆，稍候片刻！'
          });
        }
      },
      fail: () => {
        reject({
          errno: -1,
          errmsg: '网络不给力，请检查你的网络设置~'
        });
      },
      complete: (data) => {
        console.log(data, 'data');
        resolve(responseData);
        hideLoading();
      }
    });
  });
}

const http = {
  get: <T>(api: string, params: any) =>
    baseRequest('GET', api, {
      ...getCommonParams(),
      ...params
    }) as Http.Response<T>,
  post: <T>(api: string, params: any) =>
    baseRequest('POST', api, {
      ...getCommonParams(),
      ...params
    }) as Http.Response<T>
};

export default http;
