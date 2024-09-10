import React, { useState, useEffect } from 'react'
import ComponentsArea from '@/pages/LowCode/ComponentsArea'
import CanvasArea from '@/pages/LowCode/CanvasArea'
import ConfigArea from '@/pages/LowCode/ConfigArea'

const Index = () => {
  const [state, setState] = useState(null)

  useEffect(() => {
    // Component did mount logic
  }, [])

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex' }}>
      <ComponentsArea />
      <CanvasArea />
      <ConfigArea />
    </div>
  )
}

export default Index
