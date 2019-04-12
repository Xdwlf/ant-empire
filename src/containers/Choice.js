import React, {Component} from 'react';
import {connect} from 'react-redux'
import generateHome from '../utils/home'
import {setHome, updateGameStatus, updateAll, recordHome, updateMaxAnts} from '../actionCreators'
import {gameOver} from '../utils/general/gameHelpers'
import {decideIfGameIsPlaying} from '../utils/general/general'
import '../App.css'
import './styles/Choice.css'
import {CSSTransition} from 'react-transition-group'

export class Choice extends Component{
  constructor(props){
    super(props)
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
  }

  generateHomeAndNarrative(){
    let {story, currentHome} = generateHome()
    let beginning = [this.state.statusNarrative, "You have wandered upon a new area."]
    let newHomeDesc = beginning.concat(story).concat([<div className="selections">
              <button className="ui button" onClick={()=> this.props.changePage('searching')}>Keep Looking</button>
              <button className="ui button" onClick={()=>{this.selectHome(this.state.currentHome)}}>Settle Down</button>
            </div>])
    this.setState({currentHome})
    this.interval = setInterval(()=> this.setState({story: [...this.state.story, newHomeDesc.splice(0, 1)]}), 1500)
  }

  updateGameStatus(){
    //determines if status effects should be applied or if game should be over
    const {newState} = gameOver(this.props.state)
    const updatedNotification = decideIfGameIsPlaying(newState.status)
    const updatedState = Object.assign({}, newState, updatedNotification)
    //updates the redux state to reflect changes
    this.props.updateAll(updatedState)

  }

  selectHome(home){
    this.props.setHome(home)
    this.props.recordHome(home.description[0])
    this.props.changePage('gameplay')
  }

  render(){
    let story = this.state.story.map((line, idx) => (
      <div className="story" key={idx}> {line} </div>
    ))
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
                <div className="narrative"> {line} </div>
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
