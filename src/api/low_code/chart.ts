import request from '@/services/request';

export const chartDataReq = async (reqParams: any) => {
  const { url, method, params = [], headers = [], isFormData = false } = reqParams;
  const customParams = params?.map((item: any) => ({ [item.label]: item.value }));
  const customHeaders = headers?.map((item: any) => ({ [item.label]: item.value }));

  if (url && method) {
    const options: any = { method, headers: customHeaders };
    if (method === 'POST') {
      if (isFormData) {
        const fd = new FormData();
        for (let i = 0; i < params?.length; i++) {
          fd.append(params[i].label, params[i].value);
        }
        options.data = fd;
      } else {
        options.data = customParams;
      }
    } else {
      options.params = customParams;
    }
    return request(url, options);
  }
};
