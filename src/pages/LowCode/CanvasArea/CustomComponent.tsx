import React from 'react'
import { layoutItem } from '@/pages/LowCode/types'
import * as Antd from 'antd'
import { Form, FormInstance } from 'antd'
import styles from './custom_component.less'

type Props = {
  componentItem: layoutItem
  form: FormInstance
}

const CustomComponent = (props: Props) => {
  const { componentItem, form } = props

  const ComponentToRender = (Antd as any)[componentItem.componentType]

  if (!ComponentToRender) {
    return <div>Invalid component type: {componentItem.componentType}</div> // 处理未知的组件类型
  }

  const handleClick = () => {
    const event = componentItem?.customAttr?.event
    switch (event) {
      case 'submit':
        form.validateFields().then((values: any) => {
          console.log('Form values:', values)
        })
        break
      case 'reset':
        form.resetFields()
        break
    }
  }

  const render = (type: string) => {
    switch (type) {
      case 'form-item':
        return (
          <Form.Item name={componentItem.i} label={componentItem?.customAttr?.label}>
            <ComponentToRender {...componentItem.props} />
          </Form.Item>
        )
      case 'button':
        return (
          <Form.Item>
            <ComponentToRender {...componentItem.props} onClick={handleClick}>
              {componentItem?.customAttr?.label || ''}
            </ComponentToRender>
          </Form.Item>
        )
      case 'layout':
        return (
          <Form.Item>
            <ComponentToRender {...componentItem.props} />
          </Form.Item>
        )
      case 'data-display':
        return (
          <Form.Item>
            <ComponentToRender {...componentItem.props} />
          </Form.Item>
        )
      default:
        return <div>Invalid component type:</div>
    }
  }

  return (
    <div
      style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}
      className={styles.container}
    >
      {render(componentItem.type)}
    </div>
  )
}

export default CustomComponent
