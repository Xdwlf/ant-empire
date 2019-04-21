import React, {Component} from 'react';
import {connect} from 'react-redux'
import generateHome from '../utils/home'
import {setHome, updateGameStatus, updateAll, recordHome, updateMaxAnts} from '../actionCreators'
import {compileEffects, applyEffectsToStatus, calcEventEffects} from '../utils/effect';
import {addStatusEffects} from '../utils/general/statusHelpers'
import {gameOver} from '../utils/general/gameHelpers'
import {decideIfGameIsPlaying} from '../utils/general/general'
import '../App.css'
import './styles/Choice.css'
import {CSSTransition} from 'react-transition-group'

/**
 * Choice is a page that generates a home and allows the player to choose whether to stay or move on
 */
export class Choice extends Component{
  constructor(props){
    super(props)
    //Checks if there is a status effect
    const {narrative} = gameOver(this.props.state)
    this.state={
      story:[],
      statusNarrative: narrative,
      currentHome: null
    }
    this.selectHome = this.selectHome.bind(this)
    this.generateHomeAndNarrative = this.generateHomeAndNarrative.bind(this)
    this.updateGameStatus = this.updateGameStatus.bind(this)
  }
  componentWillMount(){
    this.updateGameStatus()
    this.generateHomeAndNarrative()
    this.props.updateMaxAnts(this.props.state.ants.worker + 1)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
    const updatedState = applyEffectsToStatus(this.props.state.event, this.props.state)
    updatedState.event = []
    this.props.updateAll(updatedState)
  }

  /**
   * Generates a new Home and adds the narrative to the state at intervals to stagger rendering
   */
  generateHomeAndNarrative(){
    let {story, currentHome} = generateHome()
    let beginning = [this.state.statusNarrative, "You have wandered upon a new area."]
    let newHomeDesc = beginning.concat(story).concat([<div key={'sdiv'} className="selections">
              <button className="ui button" onClick={()=> this.props.changePage('searching')}>Keep Looking</button>
              <button className="ui button" onClick={()=>{this.selectHome(this.state.currentHome)}}>Settle Down</button>
            </div>])
    this.setState({currentHome})
    this.interval = setInterval(()=> this.setState({story: [...this.state.story, newHomeDesc.splice(0, 1)]}), 1500)
  }

  updateGameStatus(){
    //determines if status effects should be applied or if game should be over
    let {newState} = gameOver(this.props.state);
    const statusEvents = addStatusEffects(newState.status);
    const event = (statusEvents.length>0)? statusEvents.map(e=> calcEventEffects(e, newState)): [];
    const updatedNotification = decideIfGameIsPlaying(newState.status)
    newState = Object.assign({}, newState, event)
    const updatedState = Object.assign({}, newState, updatedNotification, {event})
    //updates the redux state to reflect changes
    this.props.updateAll(updatedState)

  }

  /**
   * If the Player chooses to 'settle', handle everything needed to set the home
   * @param {Object} home - The home object that was generated
   */

  selectHome(home){
    this.props.setHome(home)
    this.props.recordHome(home.description[0])
    setTimeout(()=>{
      this.props.changePage('gameplay')
    }, 0)
  }

  render(){
    return(
      <div id="choice" data-test="component-choice">
        {(this.props.state.game)?
          this.state.story.map((line, idx) => (
            <CSSTransition
              in={true}
              appear={true}
              key={idx}
              timeout={500}
              classNames='fade'>
                <div key={line[0]+line.length+idx} className="narrative"> {line} </div>
            </ CSSTransition>
          )) :null}

      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return {
    state: {...reduxState}
  }
}

export default connect(mapStateToProps, {setHome, updateGameStatus, updateAll, recordHome, updateMaxAnts})(Choice)
