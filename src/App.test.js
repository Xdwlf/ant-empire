import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme'
import {App} from './App';
import {ColonyStatus} from './components/ColonyStatus'

import {findByTestAttr} from './test/testUtils'

const defaultState = {
  page: 'enter'
}

const setup = (props={}) =>{
  return shallow(<App {...props}/>)
}


describe('<App /> component', ()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = setup()
  })
  test('renders without crashing', () => {
    const component = findByTestAttr(wrapper, 'component-app')
    expect(component.length).toBe(1)
  });

  test('changes page to correct page when changePage function is invoked', ()=>{
    const page = "prequel"
    wrapper.setState({page})
    const correctPage= findByTestAttr(wrapper, page)
    expect(correctPage.length).toBe(1)
  })

  test('does not render the colony status component when page is either "enter" or "prequel"', ()=>{
    const page = "enter"
    wrapper.setState({page}, ()=>{
      const importedComponent= wrapper.find('ColonyStatus')
      expect(importedComponent.length).toBe(0)
    })
  })

  test('renders the side bar when page is neither "enter" nor "prequel" ', ()=>{
    const page = "choice"
    wrapper.setState({page}, ()=>{
      //to adjust for CSSTransition's timeout
      setTimeout(()=>{
        const importedComponent= wrapper.find('ColonyStatus')
        expect(importedComponent.length).toBe(1)
      }, 500)
    })

  })


})
