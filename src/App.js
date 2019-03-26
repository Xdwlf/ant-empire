import React, { Component } from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './App.css';
import ColonyStatus from './components/ColonyStatus'
import loadPage from './utils/LoadPage'
import {packUpAndGo} from './utils/generateEvent'
import {updateChoice, setHome, resetState, setStore} from './actionCreators'
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
      //set fuel and stores
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
    let page = loadPage(this.state.page, this.changePage, this.setChoice, this.resetGame)
    let isGamePlaying = (this.state.page !== 'enter' && this.state.page !== 'prequel')
    return (
      <div className="App" data-test="component-app">
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
              timeout={300}
              classNames="fade"
              unmountOnExit
              >
                <ColonyStatus key='statusbar' className="statusbar"/>
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

export default connect(mapStateToProps, {updateChoice, setHome, resetState, setStore})(App);
