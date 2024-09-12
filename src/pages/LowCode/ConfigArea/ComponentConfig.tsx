import React, { useMemo } from 'react'
import { curComponentType } from '@/pages/LowCode/types'
import { Form } from 'antd'
import { COMPONENT_DEFAULT_SETTINGS } from '@/pages/LowCode/constants'
import { commonItem, renderFormItem } from '@/pages/LowCode/ConfigArea/CommonFormItem'

type Props = {
  curComponent: curComponentType
  setCurComponent: React.Dispatch<React.SetStateAction<curComponentType>>
}

const ComponentConfig = (props: Props) => {
  const { curComponent, setCurComponent } = props
  if (!curComponent) return null
  const [form] = Form.useForm()
  const formItems = useMemo(() => {
    return COMPONENT_DEFAULT_SETTINGS[curComponent.componentType]?.configItems || []
  }, [curComponent])

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

  return (
    <div style={{ padding: 12, boxSizing: 'border-box' }}>
      <Form form={form} size={'small'} layout={'vertical'}>
        {formItems.map((item: commonItem) => (
          <div key={item.name}>
            {renderFormItem(item, curComponent, handleChangeCurComponent, setCurComponent)}
          </div>
        ))}
      </Form>
    </div>
  )
}

export default ComponentConfig
