import React from 'react';
import {shallow} from 'enzyme';
import {Searching} from '../Searching'

import {findByTestAttr} from '../../test/testUtils'
import {gStatus} from '../../utils/gameHelpers'

const defaultReduxState = {
  state:{
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

}

const setup = (props) => {
  const newProps = Object.assign({}, defaultReduxState, props)
  return shallow(<Searching {...newProps}/>)
}

test('<Searching /> renders without error', ()=>{
  const wrapper = setup();
  const container = findByTestAttr(wrapper, 'component-searching')
  expect(container.length).toBe(1)
})
