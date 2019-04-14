import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {generateEvent} from '../utils/event'
import {describeChoice} from '../utils/event/choice'
import {compileEffects, applyEffectsToStatus, calcEventEffects} from '../utils/effect'
import {updateAll, setEvent, updateMaxAnts} from '../actionCreators'
import {gStatus} from '../utils/general/status'
import './styles/Event.css'

export class Event extends Component{
  constructor(props){
    super(props)
    this.state = {
      story: []
    }
    this.chooseButton= this.chooseButton.bind(this)
  }

  componentWillMount(){
    let story = []
    const {narrative, events,state} = generateEvent(this.props.reduxState)
    const button = this.chooseButton()
    let firstParagraph = describeChoice(this.props.reduxState.choice)
    story.push(firstParagraph)
    story= story.concat(narrative)
    events.map(event=> story.push(event.description))
    story.push(button)
    const allEvents = (events)? compileEffects(events): []
    const allEffects = (allEvents.length>0)? allEvents.map(e=> calcEventEffects(e, this.props.reduxState)): []
    this.props.updateAll(state)
    if(allEffects.length>0) this.props.setEvent(allEffects)
    this.interval = setInterval(()=> this.setState({story: [...this.state.story, story.splice(0, 1)]}), 1000)
  }

  componentWillUnmount(){
    if(this.props.reduxState.status.every(s=> s===gStatus.HEALTHY || s===gStatus.THIRSTY ||
                    s===gStatus.HUNGRY || s===gStatus.STARVING ||s===gStatus.DEHYDRATED)){
      const updatedState = applyEffectsToStatus(this.props.reduxState.event, this.props.reduxState)
      updatedState.event = []
      this.props.updateAll(updatedState)
      }
    clearInterval(this.interval)
    this.props.updateMaxAnts(this.props.reduxState.ants.worker + 1)
  }

  chooseButton(){
    let {resetGame} = this.props
    let button = (this.props.reduxState.status.every(s=> s===gStatus.HEALTHY || s===gStatus.THIRSTY ||
                    s===gStatus.HUNGRY || s===gStatus.STARVING ||s===gStatus.DEHYDRATED))?
                        (<button key={'cont-btn'} data-test="continue-button" onClick={()=> this.props.changePage('gameplay')}>Continue</button>): <button key={'reset-btn'} onClick={resetGame}>Start Over</button>
    return button;
  }

  render(){
    const {game} = this.props.reduxState
    return (
      <div id="event" data-test="component-event">
        {(game)? this.state.story.map((paragraph, idx) => (
            <CSSTransition
                in={true}
                appear={true}
                key={idx}
                timeout={500}
                classNames='fade'>
                  <div className="narrative"> {paragraph} </div>
              </ CSSTransition>
            )) :null }

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

export default connect(mapStateToProps,{updateAll, setEvent, updateMaxAnts})(Event)
