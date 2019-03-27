import React from 'react';
import {shallow} from 'enzyme';
import {Choice} from './Choice'

import {findByTestAttr} from '../test/testUtils'

const setup = (props) => {
  return shallow(<Choice />)
}

test('<Choice /> renders without error', ()=>{
  const wrapper = setup();
  const container = findByTestAttr(wrapper, 'component-choice')
  expect(container.length).toBe(1)
})

test('<Choice /> renders story divs without error', ()=>{
})
