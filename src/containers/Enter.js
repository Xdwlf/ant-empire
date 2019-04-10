import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group'
import BackgroundAnimation from '../components/BackgroundAnimation'

import Logo from '../components/Logo'
import anime from 'animejs'
import '../App.css'
import './styles/Enter.css'

class Enter extends Component{
  constructor(props){
    super(props)
    this.state = {
      hover: false
    }
    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut = this.mouseOut.bind(this)

  }

  mouseOver(){
    this.setState({hover: true})
  }

  mouseOut(){
    this.setState({hover: false})

  }


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
    let {hover} = this.state
    let {changePage} = this.props
    return(
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="fade">
        <div className="enter-container" data-test="component-enter">
          <BackgroundAnimation hover={hover}/>
          <Logo />
          <div>
            <button data-test="enter-button" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className='ui button enterButton' onClick={()=> changePage('prequel')}>Enter</button>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default Enter;
