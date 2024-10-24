import React from 'react'
import MyModal from '@/components/MyModal'

const Index = () => {
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
      <MyModal open={true} showFullScreen draggable></MyModal>
    </div>
  )
}

export default Index
