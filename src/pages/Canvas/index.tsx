import React, { useRef, useEffect, useState } from 'react'
import { BuildRectShape, BuildRoundShape, BuildEllipseShape, Shape } from './constructor'
import { Radio, ColorPicker, Space, Input, InputRef } from 'antd'

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<InputRef>(null)
  const [shapeType, setShapeType] = useState('rect')
  const [color, setColor] = useState<string>('#1677ff')
  const [shapes, setShapes] = useState<Shape[]>([])
  const [activeShape, setActiveShape] = useState<Shape | null>(null)
  const [inputPosition, setInputPosition] = useState<{ x: number; y: number; text: string } | null>(
    null
  )

  const getIsInside = (x: number, y: number) => {
    for (let i = 0; i < shapes.length; i++) {
      if (shapes[i].isInside(x, y)) {
        return shapes[i]
      }
    }
    return null
  }

  useEffect(() => {
    const cvs = canvasRef.current
    if (!cvs) return
    const ctx = cvs.getContext('2d')
    if (!ctx) return
    const w = 800
    const h = 500
    cvs.width = w * window.devicePixelRatio
    cvs.height = h * window.devicePixelRatio
    cvs.style.width = `${w}px`
    cvs.style.height = `${h}px`
    cvs.style.backgroundColor = '#808080'

    cvs.onmousedown = function (e) {
      const cvsRect = cvs.getBoundingClientRect()
      const clickX = e.clientX - cvsRect.left
      const clickY = e.clientY - cvsRect.top
      const isInside = getIsInside(clickX, clickY)
      if (isInside) {
        const { startX, startY, endX, endY } = isInside
        // 拖动
        window.onmouseup = function () {
          window.onmousemove = null
          window.onmouseup = null
        }
        window.onmousemove = function (e) {
          const disX = e.clientX - cvsRect.left - clickX
          const disY = e.clientY - cvsRect.top - clickY
          isInside.startX = startX + disX
          isInside.endX = endX + disX
          isInside.startY = startY + disY
          isInside.endY = endY + disY
        }
      } else {
        // 新建
        let newShape: Shape | null = null
        if (shapeType === 'rect') {
          newShape = new BuildRectShape(ctx, color, clickX, clickY)
        } else if (shapeType === 'round') {
          newShape = new BuildRoundShape(ctx, color, clickX, clickY)
        } else if (shapeType === 'ellipse') {
          newShape = new BuildEllipseShape(ctx, color, clickX, clickY)
        }
        if (newShape) {
          setShapes(pre => [...pre, newShape])
        }
        window.onmouseup = function () {
          window.onmousemove = null
          window.onmouseup = null
        }
        window.onmousemove = function (e) {
          const clientX = e.clientX - cvsRect.left
          const clientY = e.clientY - cvsRect.top
          if (newShape) {
            newShape.endX = clientX
            newShape.endY = clientY
          }
        }
      }
    }

    cvs.ondblclick = function (e) {
      const cvsRect = cvs.getBoundingClientRect()
      const clickX = e.clientX - cvsRect.left
      const clickY = e.clientY - cvsRect.top
      const shape = getIsInside(clickX, clickY)
      if (shape) {
        setActiveShape(shape)
        setInputPosition({ x: e.clientX, y: e.clientY, text: shape.text })
        setTimeout(() => {
          inputRef.current?.focus()
        }, 0)
      }
    }
  }, [shapeType, color, shapes])

  useEffect(() => {
    function draw() {
      const cvs = canvasRef.current
      if (!cvs) return
      const ctx = cvs.getContext('2d')
      if (!ctx || !cvs) return
      ctx.clearRect(0, 0, cvs.width, cvs.height)
      shapes.forEach(shape => shape.draw(devicePixelRatio))
      requestAnimationFrame(draw)
    }

    draw()
  }, [shapes])

  const handleInputBlur = () => {
    if (activeShape) {
      activeShape.text = inputRef.current?.input?.value || ''
      setInputPosition(null)
      setActiveShape(null)
    }
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Space style={{ marginBottom: 6 }}>
        <ColorPicker
          value={color}
          onChange={e => {
            setColor(e.toRgbString())
          }}
        />
        <Radio.Group value={shapeType} onChange={e => setShapeType(e.target.value)}>
          <Radio value="rect">矩形</Radio>
          <Radio value="ellipse">椭圆</Radio>
          <Radio value="round">圆</Radio>
        </Radio.Group>
      </Space>
      <canvas ref={canvasRef}></canvas>
      {inputPosition && (
        <Input
          ref={inputRef}
          style={{
            position: 'fixed',
            left: inputPosition.x,
            top: inputPosition.y,
            display: 'block',
            width: 200
          }}
          defaultValue={inputPosition.text}
          onBlur={handleInputBlur}
        />
      )}
    </div>
  )
}

export default Canvas
