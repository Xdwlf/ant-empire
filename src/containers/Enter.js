import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group'
import BackgroundAnimation from '../components/BackgroundAnimation'
import EnterButton from '../components/EnterButton'
import Logo from '../components/Logo'
import anime from 'animejs'
import '../App.css'
import './styles/Enter.css'

/**
 * Home Page with animation and an Enter button
 */
class Enter extends Component{
  constructor(props){
    super(props)
    //Animation depends on whether the mouse is hovering over button
    this.state = {
      hover: false,
      clicked: false
    }
    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  mouseOver(){
    if(!this.state.clicked){
      this.setState({hover: true})

    }
  }

  mouseOut(){
    if(!this.state.clicked){
      this.setState({hover: false})
    }
  }

  /**
   * If the Enter button is clicked, handles the processes necessary
   */

  handleClick(){
    const {changePage} = this.props
    if(!this.state.clicked){
      this.setState({clicked:true})
      //Fades out logo and enter button
      anime({
        targets: '#enterButton',
        opacity: 0,
        easing: 'easeInOutSine'
      })
      anime({
        targets: '#logo path',
        strokeDashoffset: [0, anime.setDashoffset],
        easing: 'easeInOutSine',
        duration: 1100,
        loop: false
      })
      //Changes the page after a period of time to allow animations
      setTimeout(()=>{
        changePage('prequel')
      }, 4000)
    }
  }

  //Fades in the button at the beginning
  componentDidMount(){
    setTimeout(()=> anime({
      targets: '#enterButton',
      opacity: 1,
      easing: 'easeInOutSine'
    }), 4000)
  }
  render(){
    let {hover, clicked} = this.state
    return(
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="fade">
        <div className="enter-container" data-test="component-enter">
          <BackgroundAnimation hover={hover} clicked={clicked}/>
          <Logo />
          <div id="enterButton">
            <EnterButton data-test="enter-button" mouseOver={this.mouseOver} mouseOut={this.mouseOut} className='ui button enterButton' handleClick={this.handleClick}/>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

export default Enter;
