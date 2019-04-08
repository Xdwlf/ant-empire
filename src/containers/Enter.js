import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group'
import Logo from '../components/Logo'
import '../App.css'
import './styles/Enter.css'

class Enter extends Component{
  render(){
    let {changePage} = this.props
    return(
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="fade">
        <div className="enter-container" data-test="component-enter">
          <Logo />
          <button data-test="enter-button" className='ui button' onClick={()=> changePage('prequel')}>Enter</button>
        </div>
      </CSSTransition>
    )
  }
}

export default Enter;
