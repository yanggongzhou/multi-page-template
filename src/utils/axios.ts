import axios, {
  Method,
  AxiosResponse,
  AxiosError,
  AxiosPromise,
  InternalAxiosRequestConfig, CreateAxiosDefaults, Canceler
} from 'axios';

// 定义接口
interface PendingType {
  url?: string;
  method?: Method | string;
  params: any;
  data: any;
  cancel: Canceler;
}

declare module 'axios' {
  export interface AxiosInstance {

  }
  export interface AxiosResponse<T = any> extends Promise<T> {}
}


// 取消重复请求
const pending: PendingType[] = [];
const CancelToken = axios.CancelToken;
const Service = axios.create({
  baseURL: '/hw-adserving',
  withCredentials: true,
  // timeout: 10000,
} as CreateAxiosDefaults);

// 添加请求拦截器
Service.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    request.cancelToken = new CancelToken((c: Canceler) => {
      const item = {
        url: request.url,
        method: request.method,
        params: request.params,
        data: request.data,
        cancel: c
      };

      const itemIndex = pending.findIndex(val => val.url === request.url && JSON.stringify(val.params) === JSON.stringify(request.params));

      if (itemIndex !== -1) {
        pending[itemIndex].cancel();
        pending.splice(itemIndex, 1, item);
      } else {
        pending.push(item);
      }
    });
    return request;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
Service.interceptors.response.use(
  (response: AxiosResponse): AxiosPromise<any> => {
    try {
      if (!response.data.code) {
        return response.data;
      }
      if (response.data.code !== 200) {
        // if (response.data.code === 6) {
        //   Service.navigate('/login');
        //   // 清除用户信息
        //   Service.redux.dispatch(resetToken());
        //   notification.error({ message: '登录失效', placement: 'topRight' });
        // }
        return Promise.reject(response.data.message);
      }
      return response.data.data;
    } catch (err) {
      return Promise.reject(err);
    }
  },
  (err: AxiosError): any => {
    if (err?.code === "ERR_CANCELED") {
      // 请求取消
      return;
    }
    return Promise.reject(err);
  }
);

export default Service;
