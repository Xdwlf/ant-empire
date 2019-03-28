import React, {Component} from 'react'
import {connect} from 'react-redux'
import {generateEvent} from '../utils/event'
import {describeChoice} from '../utils/event/choice'
import {compileEffects, applyEffectsToStatus, calcEventEffects} from '../utils/effect'
import {updateAll, setEvent} from '../actionCreators'
import {gStatus} from '../utils/general/status'

export class Event extends Component{
  constructor(props){
    super(props)
    this.state = {
      story: []
    }
  }

  componentWillMount(){
    let story = []
    const {narrative, events,state} = generateEvent(this.props.reduxState)
    let firstParagraph = describeChoice(this.props.reduxState.choice)
    story.push(firstParagraph)
    story= story.concat(narrative)
    events.map(event=> story.push(event.description))
    const allEvents = (events)? compileEffects(events): []
    const allEffects = (allEvents.length>0)? allEvents.map(e=> calcEventEffects(e, this.props.reduxState)): []
    this.props.updateAll(state)
    if(allEffects.length>0) this.props.setEvent(allEffects)
    this.setState({story})
  }

  componentWillUnmount(){
    if(this.props.reduxState.status.every(s=> s===gStatus.HEALTHY || s===gStatus.THIRSTY ||
                    s===gStatus.HUNGRY || s===gStatus.STARVING ||s===gStatus.DEHYDRATED)){
      const updatedState = applyEffectsToStatus(this.props.reduxState.event, this.props.reduxState)
      updatedState.event = []
      this.props.updateAll(updatedState)
      }
  }

  render(){
    let {resetGame} = this.props
    let story = this.state.story.map((paragraph, idx)=> (
      <div key={idx}>{paragraph}</div>
    ))
    let button = (this.props.reduxState.status.every(s=> s===gStatus.HEALTHY || s===gStatus.THIRSTY ||
                    s===gStatus.HUNGRY || s===gStatus.STARVING ||s===gStatus.DEHYDRATED))?
                        (<button data-test="continue-button" onClick={()=> this.props.changePage('gameplay')}>Continue</button>): <button onClick={resetGame}>Start Over</button>
    return (
      <div data-test="component-event">
        {story}
        {button}
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
