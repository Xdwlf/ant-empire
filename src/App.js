import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Enter from './containers/Enter'
import Prequel from './containers/Prequel'
import Choice from './containers/Choice'
import ColonyStatus from './components/ColonyStatus'
import {Link, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      page: 'enter'
    }
    this.decidePage = this.decidePage.bind(this)
    this.changePage = this.changePage.bind(this)
  }
  decidePage(page){
    if(page==='enter'){
      return <Enter changePage={this.changePage}/>
    }
    if(page==='prequel'){
      return <Prequel changePage={this.changePage}/>
    }
    if(page==="choice"){
      return <Choice changePage={this.changePage}/>
    }
    if(page==='gameover'){
      return 'GameOver'
    }
  }
  changePage(page){
    this.setState({page})
  }
  render() {
    //logic to figure out which page to render
    let page = this.decidePage(this.state.page)
    let status = (this.state.page !== 'enter' && this.state.page !== 'prequel') ? <ColonyStatus /> : null
    return (
      <div className="App">
        {status}
        {page}
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  return {
    ...reduxState
  }
}

export default connect(mapStateToProps)(App);
