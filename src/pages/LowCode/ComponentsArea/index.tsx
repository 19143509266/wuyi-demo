import React from 'react'
import styles from './index.less'
import { Tabs } from 'antd'
import FormComponents from '@/pages/LowCode/ComponentsArea/FormComponents'
import { dragComponentItem } from '@/pages/LowCode/types'
import { UTILS_WIDTH } from '@/pages/LowCode/constants'

type Props = {
  handleComponentDragEnd: (event: React.DragEvent, componentItem: dragComponentItem) => void
}

const Index = (props: Props) => {
  const { handleComponentDragEnd } = props

  const tabItems = [
    {
      key: 'form',
      label: '表单',
      children: <FormComponents handleComponentDragEnd={handleComponentDragEnd} />
    },
    {
      key: 'chart',
      label: '图表',
      children: 'Tab 2 content'
    }
  ]

  return (
    <div className={styles.container} style={{ width: UTILS_WIDTH }}>
      <Tabs items={tabItems} />
    </div>
  )
}

export default Index
