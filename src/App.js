import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
import './App.css';
import './containers/styles/textEffects.css'
import ColonyStatus from './components/ColonyStatus'
import Notification from './components/Notification'
import loadPage from './utils/general/loadPage'
import {packUpAndGo} from './utils/travel'
import {updateChoice, setHome, resetState, setStore, updateNotification} from './actionCreators'
import {connect} from 'react-redux';

/**
 * App Component
 * The container for the entire app
 */

export class App extends Component {
  constructor(props){
    super(props);
    //Tracks which page the App should render
    this.state={
      page: 'enter',
    }
    this.changePage = this.changePage.bind(this)
    this.setChoice = this.setChoice.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  /**
   * Changes State of App to render next page
   * @param {String} page - The page the App should render next
   */
  changePage(page){
    this.setState({page})
  }

  /**
   * Handles the logic for the player's choices
   * @param {String} choice - The choice that the player has chosen in the Gameplay Component
   */

  setChoice(choice){
    this.props.updateChoice(choice)
    if(choice === 'change'){
      // If the player choose to change homes, set the home to null, limit stores, and change page
      this.props.setHome(null)
      this.props.setStore(packUpAndGo(this.props.store, this.props.ants))
      this.changePage('searching')
    } else{
      //If player chooses any other choices, then move on to event page
      this.changePage('event')
    }
  }

  /**
   * Resets the game by reseting state and changing the page to render the Enter Component
   */
  resetGame(){
    setTimeout(()=>{
      this.props.resetState()
    }, 0)
    this.setState({page:'enter'})
  }

  render() {
    //Logic to figure out which page to render
    let page = loadPage(this.state.page, this.changePage, this.setChoice, this.resetGame)
    //Checks if game is still playing
    let isGamePlaying = (this.state.page !== 'enter' && this.state.page !== 'prequel')
    return (
      <div className="App" data-test="component-app">
        <CSSTransition in={!!this.props.notification}
          appear={true}
          timeout={0}
          classNames='fade'
          unmountOnExit>
            <Notification notification={this.props.notification}
              updateNotification={this.props.updateNotification}
              stats={this.props.stats}
              resetGame={this.resetGame}/>
        </CSSTransition>
        <div className="mainscreen">
            <CSSTransition
              key={this.state.page}
              in={true}
              appear={true}
              timeout={200}
              classNames='fade'
              data-test={this.state.page}
              unmountOnExit
              >
              {page}
            </CSSTransition>
        </div>

          <CSSTransition in={isGamePlaying}
              timeout={5}
              classNames="fade"
              unmountOnExit
              >
                <ColonyStatus key='statusbar' className="statusbar" resetGame={this.resetGame}/>
          </ CSSTransition>

      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return {
    ...reduxState
  }
}

export default connect(mapStateToProps, {updateChoice, setHome, resetState, setStore, updateNotification})(App);
