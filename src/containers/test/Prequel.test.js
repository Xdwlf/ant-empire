import React from 'react';
import {shallow} from 'enzyme';
import Prequel from '../Prequel'

import {findByTestAttr} from '../../test/testUtils'

const setup = (props) => {
  return shallow(<Prequel />)
}

test('<Prequel /> renders without error', ()=>{
  const wrapper = setup();
  const container = findByTestAttr(wrapper, 'component-prequel')
  expect(container.length).toBe(1)
})
