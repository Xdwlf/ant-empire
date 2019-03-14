import React, {Component} from 'react'
import {connect} from 'react-redux'
import {generateEvent, describeChoice} from '../utils/generateEvent'
import {updateAll, setEvent} from '../actionCreators'

class Event extends Component{
  constructor(props){
    super(props)
    this.state = {
      firstParagraph: 'This is a paragraph'
    }
  }

  componentWillMount(){
    let newEvent = generateEvent(this.props.reduxState)
    let firstParagraph = describeChoice(this.props.reduxState.choice)
    this.props.updateAll(newEvent.state)
    if(newEvent.event) this.props.setEvent(newEvent.event)
    this.setState({firstParagraph})
  }

  componentWillUnmount(){
    this.props.setEvent(null)
  }

  render(){
    let firstParagraph = this.state.firstParagraph
    let eventParagraph = (this.props.reduxState.event) ? this.props.reduxState.event.description: "Not much happens"

    return (
      <div>
        {firstParagraph}
        {eventParagraph}
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

export default connect(mapStateToProps,{updateAll, setEvent})(Event)
