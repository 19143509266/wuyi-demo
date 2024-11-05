import { layoutItem } from '@/pages/LowCode/types';
import * as Antd from 'antd';
import { Form, FormInstance } from 'antd';
import styles from './custom_component.less';
import { useIcon } from '@/hooks/low_code/useIcon';

type Props = {
  componentItem: layoutItem;
  form: FormInstance;
};

const CustomComponent = (props: Props) => {
  const { componentItem, form } = props;
  const { IconComponent } = useIcon({ componentItem });

  const getComponent = () => {
    switch (componentItem.componentType) {
      case 'Checkbox':
        return Antd.Checkbox.Group;
      case 'Radio':
        return Antd.Radio.Group;
      case 'Icon':
        return IconComponent;
      default:
        return (Antd as any)[componentItem.componentType];
    }
  };

  const ComponentToRender = getComponent();

  if (!ComponentToRender) {
    return <div>Invalid component type: {componentItem.componentType}</div>; // 处理未知的组件类型
  }

  const handleClick = () => {
    const event = componentItem?.customAttr?.event;
    switch (event) {
      case 'submit':
        form.validateFields().then((values: any) => {
          console.log('Form values:', values);
        });
        break;
      case 'reset':
        form.resetFields();
        break;
    }
  };

  const render = (type: string) => {
    switch (type) {
      case 'form-item':
        return (
          <Form.Item name={componentItem.i} label={componentItem?.customAttr?.label}>
            <ComponentToRender {...componentItem.props} />
          </Form.Item>
        );
      case 'button':
        return (
          <Form.Item>
            <ComponentToRender {...componentItem.props} onClick={handleClick}>
              {componentItem?.customAttr?.label || ''}
            </ComponentToRender>
          </Form.Item>
        );
      case 'icon':
        return <ComponentToRender {...componentItem.props} />;
      case 'layout':
        return (
          <Form.Item>
            <ComponentToRender {...componentItem.props} />
          </Form.Item>
        );
      case 'data-display':
        return (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ComponentToRender {...componentItem.props} />
          </div>
        );
      default:
        return <div>Invalid component type:</div>;
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }} className={styles.container}>
      {render(componentItem.type)}
    </div>
  );
};

export default CustomComponent;
