import React from 'react';
import {shallow} from 'enzyme';
import Enter from '../Enter'

import {findByTestAttr} from '../../test/testUtils'

const setup = (props) => {
  return shallow(<Enter />)
}

test('<Enter /> renders without error', ()=>{
  const wrapper = setup();
  const container = findByTestAttr(wrapper, 'component-enter')
  expect(container.length).toBe(1)
})

test('<Enter /> renders a button', ()=>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'enter-button')
  expect(button.length).toBe(1)
})
