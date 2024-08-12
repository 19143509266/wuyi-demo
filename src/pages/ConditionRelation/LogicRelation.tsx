import React, { useMemo } from 'react'
import './logicRelation.module.less'
import { DeleteOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import FilterFiled from './FilterFiled'

const items: MenuProps['items'] = [
  {
    key: 'and',
    label: 'and'
  },
  {
    key: 'or',
    label: 'or'
  }
]

const LogicRelation = (props: any) => {
  const { x, relationList, logic, addCondReal, setRelationList, removeRelationList, setLogic } =
    props

  const changeAndOrDfs = (arr: any[], logic: any): any => {
    return arr.map((ele: any) => {
      const newLogic = logic === 'and' ? 'or' : 'and'
      if (ele.child) {
        return {
          ...ele,
          logic: newLogic,
          child: changeAndOrDfs(ele.child, newLogic)
        }
      }
      return {
        ...ele,
        logic: newLogic
      }
    })
  }

  const handleClickDropDown = (e: any) => {
    setLogic(e.key)
    setRelationList((pre: any) => changeAndOrDfs(pre, e.key))
  }

  const marginLeft = useMemo(() => {
    return {
      marginLeft: x ? '20px' : 0
    }
  }, [])

  const add = (type: any, key: any, addLogic: any) => {
    const newItem =
      type === 'condition'
        ? {
            fieldId: '',
            value: '',
            enumValue: '',
            term: '',
            filterType: 'logic',
            name: '',
            deType: '',
            key: uuidv4()
          }
        : { child: [], logic: addLogic, key: uuidv4() }
    setRelationList((pre: any) => {
      return pre.map((item: any) => {
        if (item.key === key) {
          return { ...item, child: [...item.child, newItem] }
        } else if (item.child && item.child.length > 0) {
          return {
            ...item,
            child: item.child.map((childItem: any) => {
              if (childItem.key === key) {
                return { ...childItem, child: [...childItem.child, newItem] }
              }
              return childItem
            })
          }
        }
        return item
      })
    })
  }

  const remove = (removeItem: any) => {
    setRelationList((prev: any) => {
      if (prev.find((item: any) => item.key === removeItem.key)) {
        return prev.filter((item: any) => item.key !== removeItem.key)
      } else {
        return prev.map((item: any) => {
          if (item.child) {
            const updatedChildren = item.child.filter((i: any) => i.key !== removeItem.key)
            return { ...item, child: updatedChildren }
          }
          return item
        })
      }
    })
  }

  return (
    <div className="logic" style={marginLeft}>
      <div className="logic-left">
        <div className="operate-title">
          {x ? (
            <div style={{ display: 'flex' }}>
              <span style={{ color: '#bfbfbf' }} className="mrg-title">
                {logic === 'or' ? 'OR' : 'AND'}
              </span>
              <span className="operate-icon">
                <DeleteOutlined onClick={item => removeRelationList(item)} />
              </span>
            </div>
          ) : (
            <Dropdown
              menu={{ items, onClick: handleClickDropDown }}
              placement="bottom"
              trigger={['click']}
            >
              <span style={{ color: 'rgba(0 0 0 / 65%)' }} className="mrg-title fir">
                {logic === 'or' ? 'OR' : 'AND'}
              </span>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="logic-right">
        {relationList.map((item: any, index: number) =>
          item.child ? (
            <LogicRelation
              key={item.key}
              x={item.x}
              logic={item.logic}
              relationList={item.child}
              addCondReal={(type: any, logic: any) => add(type, item.key, logic)}
              setRelationList={setRelationList}
              removeRelationList={() => remove(item)}
              setLogic={setLogic}
            />
          ) : (
            <FilterFiled key={item.key} />
          )
        )}
        <div className="logic-right-add">
          <button
            onClick={() => addCondReal('condition', logic === 'or' ? 'and' : 'or')}
            className="operand-btn"
          >
            +添加条件
          </button>
          {x < 2 && (
            <button
              onClick={() => addCondReal('relation', logic === 'or' ? 'and' : 'or')}
              className="operand-btn"
            >
              +添加关系
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default LogicRelation
