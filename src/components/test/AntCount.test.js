import React from 'react'
import {shallow} from 'enzyme'
import AntCount from '../AntCount'

import {findByTestAttr} from '../../test/testUtils'

const defaultProps = {
  ants: {
    eggs: 0,
    larvae: 0,
    pupae: 0,
    worker: 0
  },
  eventEffect: []
}

const setup = (props={}) => {
  const newProps = Object.assign({}, defaultProps, props)
  return shallow(<AntCount {...newProps} />)
}

test('<AntCount /> renders without error', ()=>{
  const wrapper = setup()
  const component = findByTestAttr(wrapper, 'component-ant-count')
  expect(component.length).toBe(1)
})

describe('displays the correct amount of', ()=>{
  let wrapper;
  let ants;
  beforeEach(()=>{
    ants= {
      eggs: 5,
      larvae: 6,
      pupae: 10,
      worker: 30
    }
    wrapper= setup({ants})
  })
  test('ant eggs', ()=>{
    const eggCount = findByTestAttr(wrapper, 'ant-eggs')
    expect(Number(eggCount.text())).toBe(ants.eggs)
  })
  test('ant larvae', ()=>{
    const larvaeCount = findByTestAttr(wrapper, 'ant-larvae')
    expect(Number(larvaeCount.text())).toBe(ants.larvae)
  })
  test('ant pupae', ()=>{
    const pupaeCount = findByTestAttr(wrapper, 'ant-pupae')
    expect(Number(pupaeCount.text())).toBe(ants.pupae)
  })
  test('ant worker', ()=>{
    const workerCount = findByTestAttr(wrapper, 'ant-worker')
    expect(Number(workerCount.text())).toBe(ants.worker)
  })
})
