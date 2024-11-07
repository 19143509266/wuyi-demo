import { useMemo } from 'react';
import { Form } from 'antd';
import { COMPONENT_DEFAULT_SETTINGS } from '@/pages/LowCode/constants';
import { commonItem, renderFormItem } from '@/pages/LowCode/ConfigArea/CommonFormItem';
import { useModel } from '@/useModel';

const ComponentConfig = () => {
  const { curComponent, setCurComponent } = useModel('low_code');
  if (!curComponent) return null;

  const [form] = Form.useForm();

  const formItems = useMemo(() => {
    return COMPONENT_DEFAULT_SETTINGS[curComponent.componentType]?.configItems || [];
  }, [curComponent]);

  const handleChangeCurComponent = (curAttr: 'props' | 'customAttr', attr: string, val: any) => {
    setCurComponent((prev) => {
      if (prev) {
        return {
          ...prev,
          [curAttr]: { ...prev[curAttr], [attr]: val },
        };
      }
      return null;
    });
  };

  return (
    <div style={{ padding: 12, boxSizing: 'border-box' }}>
      <Form form={form} size={'small'} layout={'vertical'}>
        {formItems.map((item: commonItem) => (
          <div key={item.name}>{renderFormItem(item, handleChangeCurComponent, form)}</div>
        ))}
      </Form>
    </div>
  );
};

export default ComponentConfig;
