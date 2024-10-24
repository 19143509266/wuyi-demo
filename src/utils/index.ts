export const getMargin = (element: HTMLElement) => {
  if (element) {
    const style = getComputedStyle(element)
    const marginTop = parseFloat(style.marginTop)
    const marginBottom = parseFloat(style.marginBottom)
    return marginTop + marginBottom
  }
  return 0
}
