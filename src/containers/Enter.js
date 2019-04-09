import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group'
import BackgroundAnimation from '../components/BackgroundAnimation'

import Logo from '../components/Logo'
import anime from 'animejs'
import '../App.css'
import './styles/Enter.css'

class Enter extends Component{
  componentDidMount(){
    setTimeout(()=> anime({
      targets: '.enterButton',
      translateY: -70,
      scale: 1.4,
      opacity: 1,
      easing: 'easeInOutSine'
    }), 4000)
  }
  render(){
    let {changePage} = this.props
    return(
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="fade">
        <div className="enter-container" data-test="component-enter">
          <BackgroundAnimation />
          <Logo />
          <div>
            <button data-test="enter-button" className='ui button enterButton' onClick={()=> changePage('prequel')}>Enter</button>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default Enter;
