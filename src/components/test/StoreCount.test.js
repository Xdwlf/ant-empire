import React from 'react'
import {shallow} from 'enzyme'
import StoreCount from '../StoreCount'

import {findByTestAttr} from '../../test/testUtils'

const defaultProps = {
  eventEffect:[],
  store:{
    food: 50,
    water: 130
  }
}

const setup = (props={}) => {
  const newProps = Object.assign({}, defaultProps, props)
  console.log(newProps)
  return shallow(<StoreCount {...newProps}/>)
}

test('<StoreCount /> renders without error', ()=>{
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-store-count')
  expect(component.length).toBe(1)
})

describe('<StoreCount /> renders', ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper= setup()
  })
  test('food stores without error', ()=>{
    const foodStore = findByTestAttr(wrapper, 'food-store')
    expect(foodStore.length).toBe(1)
  })
  test('water stores without error', ()=>{
    const waterStore = findByTestAttr(wrapper, 'water-store')
    expect(waterStore.length).toBe(1)
  })
  test('food stores with the correct amount of food as passed in props', ()=>{
    const foodStore = findByTestAttr(wrapper, 'food-store')
    expect(foodStore.text()).toContain(50)
  })
  test('water stores with the correct amount of water as passed in props', ()=>{
    const waterStore = findByTestAttr(wrapper, 'water-store')
    expect(waterStore.text()).toContain(130)
  })
})

describe('when effects passed into <StoreCount />', ()=>{
  let wrapper;
  const store={
    food: 80,
    water:20
  }
  const eventEffect=[{
    type: "store",
    subtype: 'water',
    number: 24
  }, {
    type: "store",
    subtype: 'food',
    number: -16
  }]
  beforeEach(()=>{
    wrapper = setup({store, eventEffect})
  })
  test('food-effects renders correct effect', ()=>{
    const foodEffect = findByTestAttr(wrapper, 'food-effect')
    expect(foodEffect.text()).toContain(-16)
  })
  test('water-effects renders correct effect', ()=>{
    const waterEffect = findByTestAttr(wrapper, 'water-effect')
    console.log(wrapper.debug())
    expect(waterEffect.text()).toContain(24)
  })
})
