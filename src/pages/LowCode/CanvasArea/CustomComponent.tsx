import { layoutItem } from '@/pages/LowCode/types';
import * as Antd from 'antd';
import { Form, FormInstance } from 'antd';
import styles from './custom_component.less';
import { useIcon } from '@/hooks/low_code/useIcon';
import { useChart } from '@/hooks/low_code/useChart';

type Props = {
  componentItem: layoutItem;
  form: FormInstance;
};

const CustomComponent = (props: Props) => {
  const { componentItem, form } = props;
  const { IconComponent } = useIcon({ componentItem });
  const { chartRef } = useChart({ componentItem });

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
          ComponentToRender && (
            <Form.Item name={componentItem.i} label={componentItem?.customAttr?.label}>
              <ComponentToRender {...componentItem.props} />
            </Form.Item>
          )
        );
      case 'button':
        return (
          ComponentToRender && (
            <Form.Item>
              <ComponentToRender {...componentItem.props} onClick={handleClick}>
                {componentItem?.customAttr?.label || ''}
              </ComponentToRender>
            </Form.Item>
          )
        );
      case 'icon':
        return ComponentToRender && <ComponentToRender {...componentItem.props} />;
      case 'layout':
        return (
          ComponentToRender && (
            <Form.Item>
              <ComponentToRender {...componentItem.props} />
            </Form.Item>
          )
        );
      case 'data-display':
        return (
          ComponentToRender && (
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
          )
        );
      case 'chart':
        return <div ref={chartRef}></div>;
      default:
        return <div>未找到组件</div>;
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }} className={styles.container}>
      {render(componentItem.type)}
    </div>
  );
};

export default CustomComponent;
