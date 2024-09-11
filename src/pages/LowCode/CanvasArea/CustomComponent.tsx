import React from 'react'
import { layoutItem } from '@/pages/LowCode/types'
import * as Antd from 'antd'

type Props = {
  componentItem: layoutItem
}

const CustomComponent = (props: Props) => {
  const { componentItem } = props

  const ComponentToRender = (Antd as any)[componentItem.type]

  if (!ComponentToRender) {
    return <div>Invalid component type: {componentItem.type}</div> // 处理未知的组件类型
  }

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ComponentToRender />
    </div>
  )
}

export default CustomComponent
