import { extend } from 'umi-request';

// 创建一个 umi-request 实例
const request = extend({
  timeout: 30000,
});

// 请求拦截器
request.interceptors.request.use((url, options) => {
  return {
    url,
    options,
  };
});

// 响应拦截器
request.interceptors.response.use(async (response) => {
  return response;
});

export default request;
