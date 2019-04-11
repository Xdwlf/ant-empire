import React, {Component} from 'react';
import './styles/EnterButton.css'

class EnterButton extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {handleClick, mouseOver, mouseOut, clicked, hover} = this.props
    return(
      <button onClick={handleClick} onMouseOver={mouseOver} onMouseOut={mouseOut} className="ui button" id="enterbtn">Enter</button>
    )
  }
}

export default EnterButton
