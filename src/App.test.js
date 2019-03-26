import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme'
import {App} from './App';

import {findByTestAttr} from './test/testUtils'

const defaultState = {
  page: 'enter'
}

const setup = (props={}) =>{
  return shallow(<App {...props}/>)
}

describe('app component', ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = setup()
  })
  test('renders without crashing', () => {
    const component = findByTestAttr(wrapper, 'component-app')
    expect(component.length).toBe(1)
  });

})
