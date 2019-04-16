import React, {Component} from 'react';
import './styles/EnterButton.css'

/**
 * Enter button on Enter page at landing
 */

class EnterButton extends Component{

  render(){
    const {handleClick, mouseOver, mouseOut} = this.props
    return(
      <button onClick={handleClick} onMouseOver={mouseOver} onMouseOut={mouseOut} className="ui button" id="enterbtn">Enter</button>
    )
  }
}

export default EnterButton
