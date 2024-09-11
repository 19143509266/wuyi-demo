// 通用的添加子节点的函数
import { message } from 'antd'

export function addItemToTree<T extends { key: string; children?: T[] }>(
  items: T[],
  curKey: string | null,
  newItem: T
): T[] {
  // 校验 newItem 的 key 是否已经存在
  const isKeyExists = (items: T[], key: string): boolean => {
    return items.some(
      item => item.key === key || (item.children && isKeyExists(item.children, key))
    )
  }

  if (isKeyExists(items, newItem.key)) {
    message.error('key 已经存在，请重新输入')
    return items
  }

  if (curKey === null) {
    // 如果 curKey 为 null，直接将 newItem 添加到根节点下
    return [...items, newItem]
  }

  // 否则，递归查找并添加到指定的 key 下
  return items.map(item => {
    if (item.key === curKey) {
      // 找到对应的节点并添加新项到 children
      return {
        ...item,
        children: [...(item.children || []), newItem]
      }
    } else if (item.children) {
      // 递归查找子节点
      return {
        ...item,
        children: addItemToTree(item.children, curKey, newItem)
      }
    }
    return item
  })
}

// 通用的删除节点的函数
export function removeItemFromTree<T extends { key: string; children?: T[] }>(
  items: T[],
  curKey: string
): T[] {
  return items
    .filter(item => item.key !== curKey) // 过滤掉 key 匹配的节点
    .map(item => ({
      ...item,
      children: item.children ? removeItemFromTree(item.children, curKey) : [] // 递归处理子节点
    }))
}
