import React from 'react'
import MyProTable from '@/components/MyProTable'

const getColumns = () => {
  const res = []
  for (let i = 0; i < 10; i++) {
    res.push({
      title: `测试${i}`,
      dataIndex: i
    })
  }
  return res
}

const getData = () => {
  const res = []
  for (let i = 0; i < 100; i++) {
    const row: any = {}
    for (let j = 0; j < 10; j++) {
      row[j] = `数据${i}-${j}`
    }
    res.push({
      key: i, // 每条数据需要唯一 key
      ...row
    })
  }
  return res
}

const Index = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        style={{ height: '50px', backgroundColor: '#ccc', cursor: 'pointer' }}
        onClick={() => {
          if (ref.current) {
            ref.current.requestFullscreen()
          }
        }}
      >
        head
      </div>
      <div style={{ height: 'calc(100% - 100px)' }} ref={ref}>
        <MyProTable columns={getColumns()} dataSource={getData()} autoHeight rowKey="key" />
      </div>
      <div style={{ height: '50px', backgroundColor: '#ccc' }}>footer</div>
    </div>
  )
}

export default Index
