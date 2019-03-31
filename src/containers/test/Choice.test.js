import React from 'react';
import {shallow} from 'enzyme';
import {Choice} from '../Choice'
import {gStatus} from '../../utils/general/status'

import {findByTestAttr} from '../../test/testUtils'

const defaultReduxState={

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
    home: null,
    page: 'enter',
    choice: null,
    game: true,
    event: [],
    status: [gStatus.HEALTHY]
}

const setup = (props) => {
  const newProps= Object.assign({}, {state: defaultReduxState}, props)
  return shallow(<Choice {...newProps} updateAll={()=>null} />)
}

test('<Choice /> renders without error', ()=>{
  const wrapper = setup();
  const container = findByTestAttr(wrapper, 'component-choice')
  expect(container.length).toBe(1)
})

test('<Choice /> renders story divs without error', ()=>{
})
