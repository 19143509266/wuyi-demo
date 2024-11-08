import request from '@/services/request';

export const chartDataReq = async (reqParams: any) => {
  const { url, method, params = [], headers = [], isFormData = false } = reqParams;
  const customParams = params?.reduce((acc: any, item: any) => {
    const valueType = item?.valueType || 'string';
    if (valueType === 'array') {
      return { ...acc, [item.label]: item.value ? item.value.split(',') : [] };
    }
    if (valueType === 'boolean') {
      return { ...acc, [item.label]: item.value === '1' };
    }
    return { ...acc, [item.label]: item.value };
  }, {});
  const customHeaders = headers?.reduce((acc: any, item: any) => ({ ...acc, [item.label]: item.value }), {});

  if (url && method) {
    const options: any = { method, headers: customHeaders };
    if (method === 'POST') {
      if (isFormData) {
        const fd = new FormData();
        Object.keys(customParams).forEach((key) => {
          fd.append(key, customParams[key]);
        });
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
