import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group'
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
        <div className="enter-container">
          <h1>Welcome to the Ant Empire.</h1>
          <button className='ui button' onClick={()=> changePage('prequel')}>Enter</button>
        </div>
      </CSSTransition>
    )
  }
}

export default Enter;
