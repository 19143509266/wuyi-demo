import { DeleteOutlined } from '@ant-design/icons';
import { Button, Form, FormInstance, Input, InputNumber, Popover, Select, Space, Switch } from 'antd';
import { useEffect, useState } from 'react';
import { useModel } from '@/useModel';

export const RequestData = ({ form }: { form: FormInstance }) => {
  const { curComponent, setCurComponent } = useModel('low_code');
  const method = Form.useWatch('method', form);
  const [headers, setHeaders] = useState<{ label: string; value: string }[]>([]);
  const [params, setParams] = useState<
    {
      label: string;
      value: string | number;
      valueType?: 'string' | 'number' | 'date';
      dataFormatType?: string;
    }[]
  >([]);

  const handleChange = (type: 'headers' | 'params', valueType: 'label' | 'value', value: any, index: number) => {
    const setState = type === 'headers' ? setHeaders : setParams;
    setState((prev: any[]) =>
      prev.map((item: any, i: number) => (i === index ? { ...item, [valueType]: value } : item)),
    );
  };

  const handleAddHeaders = () => {
    setHeaders((prev) => [...prev, { label: '', value: '' }]);
  };

  const handleAddParams = (valueType: 'string' | 'number' | 'date') => {
    setParams((prev) => [...prev, { label: '', value: '', valueType }]);
  };

  const handleDelete = (type: 'headers' | 'params', index: number) => {
    const setState = type === 'headers' ? setHeaders : setParams;
    setState((prev: any[]) => prev.filter((_: any, i: number) => i !== index));
  };

  const handleRequest = () => {
    form.validateFields(['url', 'method', 'isFormData', 'dataPath']).then((values) => {
      setCurComponent((prev: any) => ({
        ...prev,
        customAttr: {
          ...prev.customAttr,
          requestData: {
            url: values.url,
            method,
            isFormData: values.isFormData,
            dataPath: values.dataPath,
            headers,
            params,
          },
        },
      }));
    });
  };

  useEffect(() => {
    if (curComponent?.customAttr?.requestData) {
      const { url, method, isFormData, headers, params, dataPath } = curComponent?.customAttr?.requestData;
      form.setFieldsValue({ url, method, isFormData, dataPath });
      setHeaders(headers);
      setParams(params);
    }
  }, [curComponent?.customAttr?.requestData]);

  return (
    <>
      <Form.Item label="请求地址" name="url" rules={[{ required: true, message: '请输入请求地址' }]}>
        <Input placeholder="请输入请求地址" />
      </Form.Item>
      <Form.Item label="请求方法" name="method" rules={[{ required: true, message: '请选择请求方法' }]}>
        <Select
          options={[
            { label: 'GET', value: 'GET' },
            { label: 'POST', value: 'POST' },
          ]}
          placeholder="请选择请求方法"
        />
      </Form.Item>
      <Form.Item label="请求头" style={{ marginBottom: 0 }}>
        {headers.map((item, index) => (
          <Space.Compact key={index} style={{ marginBottom: 12 }}>
            <Form.Item noStyle>
              <Input
                style={{ width: '30%' }}
                placeholder="请输入请求头名"
                value={item.label}
                onChange={(e) => handleChange('headers', 'label', e.target.value, index)}
              />
            </Form.Item>
            <Form.Item noStyle>
              <Input
                style={{ width: '60%' }}
                placeholder="请输入请求头"
                value={item.value}
                onChange={(e) => handleChange('headers', 'value', e.target.value, index)}
              />
            </Form.Item>
            <Button onClick={() => handleDelete('headers', index)} icon={<DeleteOutlined />} />
          </Space.Compact>
        ))}
      </Form.Item>
      <Button type="link" onClick={handleAddHeaders} style={{ marginBottom: 12 }}>
        添加请求头
      </Button>
      <Form.Item label="请求参数" style={{ marginBottom: 0 }}>
        {params.map((item, index) => (
          <Space.Compact key={index} style={{ marginBottom: 12 }}>
            <Form.Item noStyle>
              <Input
                style={{ width: '30%' }}
                placeholder="请输入参数名"
                value={item.label}
                onChange={(e) => handleChange('params', 'label', e.target.value, index)}
              />
            </Form.Item>
            <Form.Item noStyle>
              {item.valueType === 'string' ? (
                <Input
                  style={{ width: '60%' }}
                  placeholder="请输入参数"
                  value={item.value}
                  onChange={(e) => handleChange('params', 'value', e.target.value, index)}
                />
              ) : item.valueType === 'number' ? (
                <InputNumber
                  style={{ width: '60%' }}
                  placeholder="请输入参数"
                  value={item.value}
                  onChange={(value) => handleChange('params', 'value', value, index)}
                />
              ) : null}
            </Form.Item>
            <Button onClick={() => handleDelete('params', index)} icon={<DeleteOutlined />} />
          </Space.Compact>
        ))}
      </Form.Item>
      <Popover
        trigger="click"
        content={
          <>
            <Button type="link" onClick={() => handleAddParams('string')}>
              string类型
            </Button>
            <Button type="link" onClick={() => handleAddParams('number')}>
              数字类型
            </Button>
            <Button type="link" onClick={() => handleAddParams('date')}>
              实时时间
            </Button>
          </>
        }
      >
        <Button type="link" style={{ marginBottom: 12 }}>
          添加请求参数
        </Button>
      </Popover>
      <Form.Item label="数据路径" name="dataPath" rules={[{ required: true, message: '请输入数据路径' }]}>
        <Input placeholder="请输入数据路径, 多层以/隔开" />
      </Form.Item>
      {method === 'POST' && (
        <Form.Item label="是否为表单请求" name="isFormData">
          <Switch />
        </Form.Item>
      )}
      <Form.Item>
        <Button type="primary" onClick={handleRequest} size="small">
          保存并重新请求数据
        </Button>
      </Form.Item>
    </>
  );
};
