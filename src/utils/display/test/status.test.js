import {describeRiskAsAdjective} from '../status'
import React from 'react'

describe('describeRiskAsAdjective function takes in a number', ()=>{
  const num = 1
  test('returns a react jsx', ()=>{
    const result = describeRiskAsAdjective(num)
    expect(typeof result).toBe("object")
  })
  test('returns for very low numbers', ()=>{
    const result = describeRiskAsAdjective(num)
    expect(result.props.children.length).not.toBe(0)
  })
  test('returns for medium numbers', ()=>{
    const newNum = 5
    const result = describeRiskAsAdjective(newNum)
    expect(result.props.children.length).not.toBe(0)
  })
  test('returns for high numbers', ()=>{
    const newNum = 9
    const result = describeRiskAsAdjective(newNum)
    expect(result.props.children.length).not.toBe(0)
  })
})
