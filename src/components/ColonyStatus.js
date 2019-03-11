import React, {Component} from 'react'
import {connect} from 'react-redux'

class ColonyStatus extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<div>Status Bar</div>)
  }
}

function mapStateToProps(reduxState){
  return {
    ...reduxState
  }
}

export default connect(mapStateToProps)(ColonyStatus)
