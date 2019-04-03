import React from 'react';
import {shallow} from 'enzyme';
import ResourceCount from '../ResourceCount'

import {findByTestAttr} from '../../test/testUtils'

const defaultProps = {
  eventEffect: [],
  resources: {
    food: 5,
    water: 10
  }
}

const setup = (props) => {
  const newProps = Object.assign({}, defaultProps, props)
  return shallow(<ResourceCount {...newProps}/>)
}

test('<ResourceCount /> renders without error', ()=>{
  const wrapper = setup();
  const container = findByTestAttr(wrapper, 'component-resource-count')
  expect(container.length).toBe(1)
})

describe('when effects are passed into props', ()=>{
  let wrapper;
  const eventEffect = [{type: 'resource',
  subtype: 'food',
  number: -1},{type: 'resource',
  subtype: 'water',
  number: -3}]
  beforeEach(()=>{
    wrapper = setup({eventEffect})
  })
  test('food resources are rendered', ()=>{
    const foodResource = findByTestAttr(wrapper, 'food-resource')
    expect(foodResource.length).toBe(1)
  })
  test('water resources are rendered', ()=>{
    const waterResource = findByTestAttr(wrapper, 'water-resource')
    expect(waterResource.length).toBe(1)
  })
  test('food resources display without error', ()=>{
    const foodResource = findByTestAttr(wrapper, 'food-resource')
    expect(foodResource.text().length).not.toBe(0)
  })
  test('water resources display without error', ()=>{
    const waterResource = findByTestAttr(wrapper, 'water-resource')
    expect(waterResource.text().length).not.toBe(0)
  })

})
