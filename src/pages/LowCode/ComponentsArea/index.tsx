import React from 'react'
import styles from './index.modules.less'
import { Tabs } from 'antd'
import './index.modules.less'
import FormComponents from '@/pages/LowCode/ComponentsArea/FormComponents'

const Index = () => {
  const tabItems = [
    {
      key: 'form',
      label: '表单',
      children: <FormComponents />
    },
    {
      key: 'chart',
      label: '图表',
      children: 'Tab 2 content'
    }
  ]

  return (
    <div className={styles.container}>
      <Tabs items={tabItems} />
    </div>
  )
}

export default Index
