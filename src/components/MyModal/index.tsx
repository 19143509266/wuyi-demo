import React, { useMemo, useRef, useState } from 'react'
import { Button, Modal, ModalProps } from 'antd'
import type { DraggableData, DraggableEvent } from 'react-draggable'
import Draggable from 'react-draggable'
import { CloseOutlined, FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'

// 定义组件的 Props 类型
type Props = ModalProps & {
  children?: React.ReactNode
  draggable?: boolean
  showFullScreen?: boolean
}

const Index: React.FC<Props> = props => {
  const {
    children,
    title,
    draggable = false,
    showFullScreen = false,
    style = {},
    styles = {},
    afterClose,
    ...myModalProps
  } = props
  const { content = {}, footer = {} } = styles
  const draggableRef = useRef<HTMLDivElement>(null)
  const [disabled, setDisabled] = useState(true)
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 })
  const [isFullScreen, setIsFullScreen] = useState(false)

  const reset = () => {
    setDisabled(true)
    setBounds({ left: 0, top: 0, bottom: 0, right: 0 })
    setIsFullScreen(false)
  }

  const newAfterClose = () => {
    reset()
    afterClose?.()
  }

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = document.documentElement
    const targetRect = draggableRef.current?.getBoundingClientRect()
    if (!targetRect) {
      return
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y)
    })
  }

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  const fullScreenStyle = useMemo(() => {
    return isFullScreen
      ? {
          width: '100%',
          height: '100%',
          style: { ...style, maxWidth: '100%' },
          styles: {
            ...styles,
            content: { ...content, borderRadius: 0, height: '100vh', overflow: 'auto' },
            footer: { ...footer, position: 'fixed' as 'fixed', bottom: 12, right: 12 }
          }
        }
      : {}
  }, [isFullScreen])

  const isDraggable = useMemo(() => {
    return draggable && !isFullScreen
  }, [draggable, isFullScreen])

  const headerStyle = useMemo(() => {
    return isDraggable ? { cursor: 'move' } : {}
  }, [isDraggable])

  const headerProps = useMemo(() => {
    return isDraggable
      ? { onMouseOver: () => setDisabled(false), onMouseOut: () => setDisabled(true) }
      : {}
  }, [isDraggable])

  const customHeader = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...headerStyle
      }}
      {...headerProps}
    >
      <div style={{ flex: 1 }}>{title}</div>
      <div>
        {showFullScreen && (
          <Button type="text" onClick={handleFullScreen}>
            {!isFullScreen ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
          </Button>
        )}
        <Button type="text" onClick={myModalProps.onCancel}>
          <CloseOutlined />
        </Button>
      </div>
    </div>
  )

  return (
    <Modal
      {...myModalProps}
      title={customHeader}
      modalRender={modal =>
        isDraggable ? (
          <Draggable disabled={disabled} bounds={bounds} nodeRef={draggableRef} onStart={onStart}>
            <div ref={draggableRef}>{modal}</div>
          </Draggable>
        ) : (
          modal
        )
      }
      closable={false}
      {...fullScreenStyle}
      afterClose={newAfterClose}
    >
      {children}
    </Modal>
  )
}

export default Index
