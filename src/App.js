import React, { Component } from 'react';
import './App.css';
import ColonyStatus from './components/ColonyStatus'
import loadPage from './utils/LoadPage'
import {updateChoice, setHome} from './actionCreators'
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      page: 'enter',
      choice: null,
      eventDisplay: null
    }
    this.changePage = this.changePage.bind(this)
    this.setChoice = this.setChoice.bind(this)
    this.displayEvent = this.displayEvent.bind(this)
  }

  changePage(page){
    this.setState({page})
  }

  setChoice(choice){
    if(choice === 'change'){
      //set fuel and stores
      //set home to null
      this.props.setHome(null)
      //redirects to searching
      this.changePage('searching')
    } else{
      this.props.updateChoice(choice)
      this.changePage('event')
    }
  }

  displayEvent(event){

  }

  render() {
    //logic to figure out which page to render
    let page = loadPage(this.state.page, this.changePage, this.setChoice)
    let status = (this.state.page !== 'enter' && this.state.page !== 'prequel') ?
        (<div className='sidebar'> <ColonyStatus displayEvent={this.displayEvent}/> </div>): null
    return (
      <div className="App">
        <div className='mainscreen'>
        {page}
        </div>
        {status}
      </div>
    );
  }
}

function mapStateToProps(reduxState){
  return {
    ...reduxState
  }
}

export default connect(mapStateToProps, {updateChoice, setHome})(App);
