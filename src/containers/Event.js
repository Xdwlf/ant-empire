import React, {Component} from 'react'
import {connect} from 'react-redux'
import {generateEvent, calcCurrentAnts} from '../utils/generateEvent'
import {updateAll} from '../actionCreators'

class Event extends Component{

  constructor(props){
    super(props)
    this.state = {
      event: null
    }
  }

  componentWillMount(){
    let newEvent = generateEvent(this.props.reduxState)
    this.props.updateAll(newEvent.state)
    this.setState({event: newEvent})
  }

  render(){

    return (
      <div>
        <button onClick={()=> this.props.changePage('gameplay')}>Continue</button>
      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return {
    reduxState: {
      ...reduxState
    }
  }
}

export default connect(mapStateToProps,{updateAll})(Event)
