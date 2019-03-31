import React, {Component} from 'react'
import "./styles/Notification.css";

class Notification extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let content = this.props.notification;
    return (<div id="notification">
      {content}
      <button onClick={this.props.resetGame}>Play Again</button>
      </div>)
  }
}

export default Notification
