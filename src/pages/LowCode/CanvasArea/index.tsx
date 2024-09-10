import React, { useState, useEffect } from 'react'
import styles from './index.less'

const Index = () => {
  const [state, setState] = useState(null)

  useEffect(() => {
    // Component did mount logic
  }, [])

  return <div className={styles.container}>{/* Your code here */}</div>
}

export default Index
