import React, { useEffect, useRef } from 'react'

const G2Demo = () => {
  const ref = useRef(null)

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <div ref={ref} style={{ width: '80%', height: 800 }}></div>
    </div>
  )
}

export default G2Demo
