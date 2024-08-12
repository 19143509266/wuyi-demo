import React, { useMemo, useState } from 'react'
import './relation.module.less'
import { calculateDepth, calculateDepthDash, dfsXY } from './relation'
import LogicRelation from './LogicRelation'
import { v4 as uuidv4 } from 'uuid'

const ConditionRelation = () => {
  const [relationList, setRelationList] = useState<any[]>([])
  const [logic, setLogic] = useState('or')

  const svgRealinePath = useMemo(() => {
    const lg = relationList.length
    let a = { x: 0, y: 0, child: relationList }
    a.y = Math.floor(dfsXY(a, 0) / 2)
    if (!lg) return ''
    let path = calculateDepth(a)
    return path
  }, [relationList])

  const svgDashinePath = useMemo(() => {
    const lg = relationList.length
    let a = { x: 0, y: 0, child: relationList }
    a.y = Math.floor(dfsXY(a, 0) / 2)
    if (!lg) return `M48 20 L68 20`
    let path = calculateDepthDash(a)
    return path
  }, [relationList])

  const addCondReal = (type: string, logic: any) => {
    const newRelation =
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
        : { child: [], logic, key: uuidv4() }

    setRelationList(prev => [...prev, newRelation])
  }

  const removeRelationList = (item: any) => {
    setRelationList([])
  }

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        background: '#d3d3d3',
        padding: 12,
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          width: 850,
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <LogicRelation
          x={0}
          relationList={relationList}
          logic={logic}
          addCondReal={addCondReal}
          setRelationList={setRelationList}
          removeRelationList={removeRelationList}
          setLogic={setLogic}
        />
        <svg width="388" height="100%" className="real-line">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            d={svgRealinePath}
            fill="none"
            stroke="#CCCCCC"
            strokeWidth="0.5"
          ></path>
        </svg>
        <svg width="388" height="100%" className="dash-line">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            d={svgDashinePath}
            fill="none"
            stroke="#CCCCCC"
            strokeWidth="0.5"
            strokeDasharray="4,4"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default ConditionRelation
