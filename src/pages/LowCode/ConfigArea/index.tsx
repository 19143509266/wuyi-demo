import React from 'react'
import styles from './index.less'
import { Tabs } from 'antd'
import { UTILS_WIDTH } from '@/pages/LowCode/constants'
import ComponentConfig from '@/pages/LowCode/ConfigArea/ComponentConfig'
import { curComponentType } from '@/pages/LowCode/types'
import GlobalConfig from '@/pages/LowCode/ConfigArea/GlobalConfig'

type Props = {
  curComponent: curComponentType
  setCurComponent: React.Dispatch<React.SetStateAction<curComponentType>>
}

const Index = (props: Props) => {
  const { curComponent, setCurComponent } = props

  const tabItems = [
    {
      key: 'form',
      label: '组件配置',
      children: <ComponentConfig curComponent={curComponent} setCurComponent={setCurComponent} />
    },
    {
      key: 'chart',
      label: '整体配置',
      children: <GlobalConfig />
    }
  ]

  return (
    <div className={styles.container} style={{ width: UTILS_WIDTH }}>
      <Tabs items={tabItems} />
    </div>
  )
}

export default Index
