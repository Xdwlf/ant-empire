import React from 'react';
import {shallow} from 'enzyme';
import Gameplay from '../Gameplay'

import {findByTestAttr} from '../../test/testUtils'

const setup = (props) => {
  return shallow(<Gameplay />)
}

test('<Gameplay /> renders without error', ()=>{
  const wrapper = setup();
  const container = findByTestAttr(wrapper, 'component-gameplay')
  expect(container.length).toBe(1)
})

test('<Gameplay /> renders buttons', ()=>{
  const wrapper = setup();
  const buttons = wrapper.find("button")
  expect(buttons.length).not.toBe(0)
})
