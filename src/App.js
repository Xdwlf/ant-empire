import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.decidePage = this.decidePage.bind(this)
  }
  decidePage(page){
    
  }
  render() {
    //logic to figure out which page to render
    return (
      <div className="App">

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
