import { Form, InputNumber } from 'antd';
import { useModel } from '@/useModel';

const GlobalConfig = () => {
  const { globalConfig, setGlobalConfig } = useModel('low_code');
  const [form] = Form.useForm();

  return (
    <div style={{ padding: 12, boxSizing: 'border-box' }}>
      <Form form={form}>
        <Form.Item label="网格列数" name={'gridCols'} initialValue={globalConfig.gridCols}>
          <InputNumber
            size={'small'}
            onChange={(e) => {
              if (typeof e === 'number') {
                setGlobalConfig((prev) => ({ ...prev, gridCols: e }));
              }
            }}
          />
        </Form.Item>
        <Form.Item label="网格行高" name={'gridRowHeight'} initialValue={globalConfig.gridRowHeight}>
          <InputNumber
            size={'small'}
            onChange={(e) => {
              if (typeof e === 'number') {
                setGlobalConfig((prev) => ({ ...prev, gridRowHeight: e }));
              }
            }}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default GlobalConfig;
