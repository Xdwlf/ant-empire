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

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      page: 'enter',
    }
    this.changePage = this.changePage.bind(this)
    this.setChoice = this.setChoice.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  changePage(page){
    this.setState({page})
  }

  setChoice(choice){
    this.props.updateChoice(choice)
    if(choice === 'change'){
      this.props.setHome(null)
      //redirects to searching
      this.props.setStore(packUpAndGo(this.props.store, this.props.ants))
      this.changePage('searching')
    } else{
      this.changePage('event')
    }
  }

  resetGame(){
    this.props.resetState()
    this.setState({page:'enter'})
  }


  render() {
    //logic to figure out which page to render
    let page = loadPage(this.state.page, this.changePage, this.setChoice, this.resetGame, this.props.ants)
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
