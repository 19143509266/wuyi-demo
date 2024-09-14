import { useState } from 'react'

const LowCode = () => {
  const [gridCols, setGridCols] = useState<number>(12) // 网格列数
  const [gridRowHeight, setGridRowHeight] = useState<number>(30) // 网格行高

  return {
    gridCols,
    setGridCols,

    gridRowHeight,
    setGridRowHeight
  }
}

export default LowCode
