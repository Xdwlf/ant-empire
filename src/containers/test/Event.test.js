import React from 'react';
import {shallow} from 'enzyme';
import {Event} from '../Event'
import {gStatus} from '../../utils/gameHelpers'

import {findByTestAttr} from '../../test/testUtils'

const defaultReduxState={
  updateAll: function(){
    return undefined
  },
  setEvent: function(){
    return undefined
  },
  reduxState:{
    ants: {
      eggs:0,
      larvae:0,
      pupae: 0,
      worker: 0
    },
    store: {
      food: 200,
      water: 200
    },
    home: {
      resources:{
        food: 5,
        water: 3
      },
      weather: {
        temperature: {
          risk: 5,
          desc: "hot"
        },
        humidity: {
          risk: 3,
          desc: "wet"
        }
      },
      risk:{
        human: 10,
        animal: 3,
        ant: 8
      }
    },
    page: 'enter',
    choice: "defend",
    game: true,
    event: [],
    status: [gStatus.HEALTHY]
  }
}

const setup = (props) => {
  const newProps = Object.assign({}, defaultReduxState, props)
  return shallow(<Event {...newProps}/>)
}

test('<Event /> renders without error', ()=>{
  const wrapper = setup();
  const container = findByTestAttr(wrapper, 'component-event')
  expect(container.length).toBe(1)
})

test('<Event /> renders button', ()=>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'continue-button')
  expect(button.length).toBe(1)
})
