import React from 'react';
import {shallow} from 'enzyme';
import {Choice} from '../Choice'
import {gStatus} from '../../utils/gameHelpers'

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
  const newProps= Object.assign({}, defaultReduxState, props)
  return shallow(<Choice {...newProps} />)
}

test('<Choice /> renders without error', ()=>{
  const wrapper = setup();
  const container = findByTestAttr(wrapper, 'component-choice')
  expect(container.length).toBe(1)
})

test('<Choice /> renders story divs without error', ()=>{
})
