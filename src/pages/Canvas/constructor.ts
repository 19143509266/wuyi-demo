// 定义通用类型
export interface Shape {
  color: string
  startX: number
  startY: number
  endX: number
  endY: number
  text: string

  MinX: number
  MaxX: number
  MinY: number
  MaxY: number

  draw(devicePixelRatio: number): void
  isInside(x: number, y: number): boolean
}

// 矩形
export class BuildRectShape implements Shape {
  color: string
  startX: number
  startY: number
  endX: number
  endY: number
  text: string
  private ctx: CanvasRenderingContext2D

  constructor(ctx: CanvasRenderingContext2D, color: string, startX: number, startY: number) {
    this.ctx = ctx
    this.color = color
    this.startX = startX
    this.startY = startY
    this.endX = startX
    this.endY = startY
    this.text = ''
  }

  get MinX() {
    return Math.min(this.startX, this.endX)
  }

  get MaxX() {
    return Math.max(this.startX, this.endX)
  }

  get MinY() {
    return Math.min(this.startY, this.endY)
  }

  get MaxY() {
    return Math.max(this.startY, this.endY)
  }

  draw(devicePixelRatio: number) {
    const ctx = this.ctx
    ctx.beginPath()
    ctx.moveTo(this.MinX * devicePixelRatio, this.MinY * devicePixelRatio)
    ctx.lineTo(this.MaxX * devicePixelRatio, this.MinY * devicePixelRatio)
    ctx.lineTo(this.MaxX * devicePixelRatio, this.MaxY * devicePixelRatio)
    ctx.lineTo(this.MinX * devicePixelRatio, this.MaxY * devicePixelRatio)
    ctx.lineTo(this.MinX * devicePixelRatio, this.MinY * devicePixelRatio)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.lineCap = 'square'
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 3
    ctx.stroke()
    if (this.text) {
      ctx.font = '16px Arial'
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(
        this.text,
        ((this.MinX + this.MaxX) / 2) * devicePixelRatio,
        ((this.MinY + this.MaxY) / 2) * devicePixelRatio
      )
    }
  }

  isInside(x: number, y: number): boolean {
    return x >= this.MinX && x <= this.MaxX && y >= this.MinY && y <= this.MaxY
  }
}

// 圆形
export class BuildRoundShape implements Shape {
  color: string
  startX: number
  startY: number
  endX: number
  endY: number
  text: string
  private ctx: CanvasRenderingContext2D

  constructor(ctx: CanvasRenderingContext2D, color: string, startX: number, startY: number) {
    this.ctx = ctx
    this.color = color
    this.startX = startX
    this.startY = startY
    this.endX = startX
    this.endY = startY
    this.text = ''
  }

  get MinX() {
    return Math.min(this.startX, this.endX)
  }

  get MaxX() {
    return Math.max(this.startX, this.endX)
  }

  get MinY() {
    return Math.min(this.startY, this.endY)
  }

  get MaxY() {
    return Math.max(this.startY, this.endY)
  }

  get centerX() {
    return (this.startX + this.endX) / 2
  }

  get centerY() {
    return (this.startY + this.endY) / 2
  }

  get radius() {
    const dx = this.endX - this.startX
    const dy = this.endY - this.startY
    return Math.sqrt(dx * dx + dy * dy) / 2
  }

  draw(devicePixelRatio: number) {
    const ctx = this.ctx
    ctx.beginPath()
    ctx.arc(
      this.centerX * devicePixelRatio,
      this.centerY * devicePixelRatio,
      this.radius * devicePixelRatio,
      0,
      Math.PI * 2
    )
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.lineCap = 'square'
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 3
    ctx.stroke()
    if (this.text) {
      ctx.font = '16px Arial'
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(this.text, this.centerX * devicePixelRatio, this.centerY * devicePixelRatio)
    }
  }

  isInside(x: number, y: number): boolean {
    const dx = x - this.centerX
    const dy = y - this.centerY
    return Math.sqrt(dx * dx + dy * dy) <= this.radius
  }
}

// 椭圆
export class BuildEllipseShape implements Shape {
  color: string
  startX: number
  startY: number
  endX: number
  endY: number
  text: string
  private ctx: CanvasRenderingContext2D

  constructor(ctx: CanvasRenderingContext2D, color: string, startX: number, startY: number) {
    this.ctx = ctx
    this.color = color
    this.startX = startX
    this.startY = startY
    this.endX = startX
    this.endY = startY
    this.text = ''
  }

  get MinX() {
    return Math.min(this.startX, this.endX)
  }

  get MaxX() {
    return Math.max(this.startX, this.endX)
  }

  get MinY() {
    return Math.min(this.startY, this.endY)
  }

  get MaxY() {
    return Math.max(this.startY, this.endY)
  }

  get centerX() {
    return (this.startX + this.endX) / 2
  }

  get centerY() {
    return (this.startY + this.endY) / 2
  }

  get radiusX() {
    return Math.abs(this.endX - this.startX) / 2
  }

  get radiusY() {
    return Math.abs(this.endY - this.startY) / 2
  }

  draw(devicePixelRatio: number) {
    const ctx = this.ctx
    ctx.beginPath()
    ctx.ellipse(
      this.centerX * devicePixelRatio,
      this.centerY * devicePixelRatio,
      this.radiusX * devicePixelRatio,
      this.radiusY * devicePixelRatio,
      0,
      0,
      Math.PI * 2
    )
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.lineCap = 'square'
    ctx.strokeStyle = '#fff'
    ctx.lineWidth = 3
    ctx.stroke()
    if (this.text) {
      ctx.font = '16px Arial'
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(this.text, this.centerX * devicePixelRatio, this.centerY * devicePixelRatio)
    }
  }

  isInside(x: number, y: number): boolean {
    const dx = (x - this.centerX) / this.radiusX
    const dy = (y - this.centerY) / this.radiusY
    return dx * dx + dy * dy <= 1
  }
}
