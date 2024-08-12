export const dfs = (arr: any, count: any) => {
  arr.forEach((ele: any) => {
    if (ele.child?.length) {
      count = dfs(ele.child, count)
    } else {
      count += 1
    }
  })
  count += 1
  return count
}

export const dfsXY = (obj: any, count: any) => {
  obj.child.forEach((ele: any) => {
    ele.x = obj.x + 1
    if (ele.child?.length) {
      let l = dfs(ele.child, 0)
      ele.y = Math.floor(l / 2) + count
      count = dfsXY(ele, count)
    } else {
      count += 1
      ele.y = count - 1
    }
  })
  count += 1
  return count
}

const getY = (arr: any) => {
  const [a] = arr
  if (a.child?.length) {
    return getY(a.child)
  }
  return a.y
}

export const calculateDepth = (obj: any) => {
  const lg = obj.child.length
  if (!lg) return ''
  let path = ''
  const { x: depth, y } = obj
  obj.child.forEach((item: any, index: any) => {
    const { y: sibingLg, z } = item
    if (item.child?.length) {
      let parent = (dfs(obj.child, 0) * 41.4) / 2 + (getY(obj.child) || 0) * 41.4
      let children = (dfs(item.child, 0) * 41.4) / 2 + getY(item.child) * 41.4
      let path1 = 0
      let path2 = 0
      if (parent < children) {
        path1 = parent
        path2 = children
      } else {
        ;[path1, path2] = [children, parent]
      }
      if (y >= sibingLg) {
        path1 = parent
        path2 = children
      }
      path += `M${24 + depth * 68} ${path1} L${24 + depth * 68} ${path2} L${
        68 + depth * 68
      } ${path2}`
      path += calculateDepth(item)
    }
    if (!item.child?.length) {
      if (sibingLg >= y) {
        path += `M${24 + depth * 68} ${y * 40} L${24 + depth * 68} ${
          (sibingLg + 1) * 41.4 - 20.69921875
        } L${68 + depth * 68} ${(sibingLg + 1) * 41.4 - 20.69921875}`
      } else {
        path += `M${24 + depth * 68} ${
          (sibingLg +
            (lg === 1 && index === 0 ? 0 : 1) +
            (obj.child[index + 1]?.child?.length ? y - sibingLg - 1 : 0)) *
            41.4 +
          20 +
          (lg === 1 && index === 0 ? 26 : 0)
        } L${24 + depth * 68} ${
          (sibingLg + 1) * 41.4 - 20.69921875 - (lg === 1 && index === 0 ? (z || 0) * 1.4 : 0)
        } L${68 + depth * 68} ${
          (sibingLg + 1) * 41.4 - 20.69921875 - (lg === 1 && index === 0 ? (z || 0) * 1.4 : 0)
        }`
      }
    }
  })
  return path
}

const dfsY = (obj: any, count: any) => {
  obj.child.forEach((ele: any) => {
    if (ele.child?.length) {
      count = dfsY(ele, count)
    } else {
      count = Math.max(count, ele.y, obj.y)
    }
  })
  return count
}

export const calculateDepthDash = (obj: any) => {
  const lg = obj.child?.length
  let path = ''
  if (!lg && Array.isArray(obj.child)) {
    const { x, y } = obj
    path += `M${48 + x * 68} ${y * 41.4 + 20} L${88 + x * 68} ${y * 41.4 + 20}`
  } else if (obj.child?.length) {
    let y = Math.max(dfsY(obj, 0), dfs(obj.child, 0) + getY(obj.child) - 1)
    let parent = (dfs(obj.child, 0) * 41.4) / 2 + (getY(obj.child) || 0) * 41.4
    const { x } = obj
    path += `M${24 + x * 68} ${parent} L${24 + x * 68} ${y * 41.4 + 20} L${64 + x * 68} ${
      y * 41.4 + 20
    }`
    obj.child.forEach((item: any) => {
      path += calculateDepthDash(item)
    })
  }

  return path
}
