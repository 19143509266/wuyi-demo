import React from 'react'
import MyProTable from '@/components/MyProTable'

const Index = () => {
  const data = () => {
    const res = []
    for (let i = 0; i < 100; i++) {
      res.push({
        name: 'name' + i,
        age: i
      })
    }
    return res
  }
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
      <MyProTable
        columns={[
          { title: 'name', dataIndex: 'name' },
          { title: 'age', dataIndex: 'age' }
        ]}
        dataSource={data()}
        rowKey={'name'}
        autoHeight
      />
    </div>
  )
}

export default Index
