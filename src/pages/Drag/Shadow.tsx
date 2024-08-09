import React, { useMemo } from 'react'
import Styles from './index.less'
import { ShadowPositionType, SLIDER_WIDTH } from './drag'

type Props = {
  shadowPosition: ShadowPositionType
}

const Shadow = (props: Props) => {
  const { shadowPosition } = props

  if (shadowPosition.x < SLIDER_WIDTH || shadowPosition.y < 0) {
    return null
  }

  const styleInfo = useMemo(() => {
    let left = 0
    let top = 0
    left = shadowPosition.x - SLIDER_WIDTH
    top = shadowPosition.y

    const style = {
      transform: `translate(${left}px, ${top}px) rotate(0deg)`,
      width: 200,
      height: 150,
      transition: '0.1s'
    }
    return style
  }, [shadowPosition])

  return <div className={Styles.shadow} style={styleInfo}></div>
}

export default Shadow
