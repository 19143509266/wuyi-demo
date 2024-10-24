import React from 'react'
import MyTabs from '@/components/MyTabs'

const Index = () => {
  const content = Array(200)
    .fill(1)
    .map(item => (
      <div key={item} style={{ width: 100, height: 100, background: '#ccc' }}>
        {item}
      </div>
    ))

  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>{content}</div>
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2'
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3'
    }
  ]

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <MyTabs items={items} style={{ width: '100%', height: '100%' }} autoFitContent />
    </div>
  )
}

export default Index
