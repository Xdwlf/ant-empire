import React from 'react';
import {shallow} from 'enzyme'
import {ColonyStatus} from '../ColonyStatus'

import {findByTestAttr} from '../../test/testUtils'

const defaultProps={
    event: [],
    ants: null,
    home: null,
    store: null
}

const setup = (props={}) =>{
  const newProps = Object.assign({}, defaultProps, props)
  return shallow(<ColonyStatus state={{...newProps}}/>)
}

test('<ColonyStatus /> renders without error', ()=> {
  const wrapper = setup()
  const component = findByTestAttr(wrapper, "component-colony-status")
  expect(component.length).toBe(1)
})

test('<ColonyStatus /> renders <AntCount />', ()=>{
  const wrapper = setup();
  const foundComponent = wrapper.find('AntCount')
  expect(foundComponent.length).toBe(1)
})

test('when home has not been chosen, home status section does not appear', ()=>{
  const wrapper = setup({home:null})
  const homeStatusSection = findByTestAttr(wrapper, "home-status-section")
  expect(homeStatusSection.length).toBe(0)
})

describe('when home is chosen', ()=>{
  let wrapper;
  let state;
  beforeEach(()=>{
    state = {event: [],
    ants: null,
    store: {
      water: 100,
      food: 50
    },
    home: {
      description: 'A small hill',
      resources: {
        food: 5,
        water: 3
      },
      weather: {
        temperature: {
          desc: 'hot'
        },
        humidity: {
          desc: 'wet'
        }
      }
    }}
    wrapper = setup(state)
  })
  test('home description is rendered without error', ()=>{
    const foundHomeDescription = findByTestAttr(wrapper, 'home-description')
    expect(foundHomeDescription.text().length).not.toBe(0)
  })
  test('<ResourceCount /> is rendered without error', ()=>{
    const foundComponent = wrapper.find("ResourceCount")
    expect(foundComponent.length).toBe(1)
  })
  test('<StoreCount /> is rendered without error', ()=>{
    const foundComponent = wrapper.find("StoreCount")
    expect(foundComponent.length).toBe(1)
  })
  test('Weather is rendered without error', ()=>{
    const foundWeatherDescription = findByTestAttr(wrapper, 'weather-description')
    expect(foundWeatherDescription.text().length).not.toBe(0)
  })
})
