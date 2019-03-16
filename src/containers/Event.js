import React, {Component} from 'react'
import {connect} from 'react-redux'
import {generateEvent, describeChoice, compileEffects, applyEffectsToStatus, calcEventEffects} from '../utils/generateEvent'
import {updateAll, setEvent} from '../actionCreators'

class Event extends Component{
  constructor(props){
    super(props)
    this.state = {
      narrative: []
    }
  }

  componentWillMount(){
    let narrative = []
    const {events,state} = generateEvent(this.props.reduxState)
    let firstParagraph = describeChoice(this.props.reduxState.choice)
    narrative.push(firstParagraph)
    events.map(event=> narrative.push(event.description))
    const allEvents = (events)? compileEffects(events): []
    const allEffects = (allEvents.length>0)? allEvents.map(e=> calcEventEffects(e, this.props.reduxState)): []
    //check game status of state
      //if game over, add gameover paragraph

    this.props.updateAll(state)
    if(allEffects.length>0) this.props.setEvent(allEffects)
    this.setState({narrative})
  }

  componentWillUnmount(){
    const updatedState = applyEffectsToStatus(this.props.reduxState.event, this.props.reduxState)
    updatedState.event = []
    this.props.updateAll(updatedState)
  }

  render(){
    let story = this.state.narrative.map((paragraph, idx)=> (
      <div key={idx}>{paragraph}</div>
    ))
    return (
      <div>
        {story}
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
