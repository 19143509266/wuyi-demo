import React from 'react'
import MyModal from '@/components/MyModal'
import { Button } from 'antd'

const Index = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Button onClick={() => setOpen(true)}>open</Button>
      <MyModal
        open={open}
        onCancel={() => setOpen(false)}
        centered
        title={'title'}
        draggable={true}
        showFullScreen={true}
        styles={{ body: { background: '#f5f5f5' } }}
      >
        <div style={{ height: 500 }}>asdf</div>
      </MyModal>
    </div>
  )
}

export default Index
