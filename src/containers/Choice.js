import React, {Component} from 'react';
import {connect} from 'react-redux'

class Choice extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>Choice</div>
    )
  }
}

function mapStateToProps(reduxState){
  return {
    ...reduxState
  }
}

export default connect(mapStateToProps)(Choice)
