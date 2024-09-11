import React from 'react'
import { curComponentType } from '@/pages/LowCode/types'
import { Form, Input, Radio, Select, Switch } from 'antd'
import {
  BUTTON_SHAPE_LIST,
  BUTTON_SIZE_LIST,
  BUTTON_TARGET_LIST,
  BUTTON_TYPE_LIST
} from '@/pages/LowCode/constants'
import TreeDatasource from '@/pages/LowCode/ConfigArea/TreeDatasource'

type Props = {
  curComponent: curComponentType
  setCurComponent: React.Dispatch<React.SetStateAction<curComponentType>>
}

const ComponentConfig = (props: Props) => {
  const { curComponent, setCurComponent } = props
  if (!curComponent) return null
  const [form] = Form.useForm()

  const handleChangeCurComponent = (curAttr: 'props' | 'customAttr', attr: string, val: any) => {
    setCurComponent(prev => {
      if (prev) {
        return {
          ...prev,
          [curAttr]: { ...prev[curAttr], [attr]: val }
        }
      }
      return null
    })
  }

  const renderConfig = (type: string) => {
    switch (type) {
      case 'Button':
        return (
          <>
            <Form.Item label="名称" name={'name'} initialValue={curComponent?.customAttr?.label}>
              <Input
                onChange={e => handleChangeCurComponent('customAttr', 'label', e.target.value)}
              />
            </Form.Item>
            <Form.Item label="按钮类型" name={'type'} initialValue={curComponent?.props?.type}>
              <Select
                options={BUTTON_TYPE_LIST}
                onChange={val => handleChangeCurComponent('props', 'type', val)}
              />
            </Form.Item>
            <Form.Item label="危险" name={'danger'} initialValue={curComponent?.props?.danger}>
              <Switch onChange={val => handleChangeCurComponent('props', 'danger', val)} />
            </Form.Item>
            <Form.Item label="链接" name={'href'} initialValue={curComponent?.props?.href}>
              <Input onChange={e => handleChangeCurComponent('props', 'href', e.target.value)} />
            </Form.Item>
            <Form.Item label="打开方式" name={'target'} initialValue={curComponent?.props?.target}>
              <Select
                options={BUTTON_TARGET_LIST}
                onChange={val => handleChangeCurComponent('props', 'type', val)}
              />
            </Form.Item>
            <Form.Item label="按钮大小" name={'size'} initialValue={curComponent?.props?.size}>
              <Select
                options={BUTTON_SIZE_LIST}
                onChange={val => handleChangeCurComponent('props', 'size', val)}
              />
            </Form.Item>
            <Form.Item label="按钮形状" name={'shape'} initialValue={curComponent?.props?.shape}>
              <Select
                options={BUTTON_SHAPE_LIST}
                onChange={val => handleChangeCurComponent('props', 'shape', val)}
              />
            </Form.Item>
            <Form.Item label="事件" name={'event'} initialValue={curComponent?.customAttr?.event}>
              <Select
                options={[
                  { label: '提交表单', value: 'submit' },
                  { label: '重置表单', value: 'reset' }
                ]}
                onChange={val => handleChangeCurComponent('customAttr', 'event', val)}
              />
            </Form.Item>
          </>
        )
      case 'Cascader':
        return (
          <>
            <Form.Item name={'dataMode'} initialValue={curComponent?.customAttr?.dataMode}>
              <Radio.Group optionType="button" buttonStyle="solid">
                <Radio value={'static'}>静态数据</Radio>
                <Radio value={'dynamic'}>动态数据</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <TreeDatasource
                options={curComponent?.props?.options}
                setCurComponent={setCurComponent}
              />
            </Form.Item>
          </>
        )
      default:
        return <div>{type}</div>
    }
  }

  return (
    <div style={{ padding: 12, boxSizing: 'border-box' }}>
      <Form form={form} size={'small'} layout={'vertical'}>
        {renderConfig(curComponent.componentType)}
      </Form>
    </div>
  )
}

export default ComponentConfig
