import React, {Component} from 'react';
import SearchingPreloader from '../components/SearchingPreloader'
import {setStore, updateChoice} from '../actionCreators'
import {calculateStoreDeductionForTravel} from '../utils/travel'
import {connect} from 'react-redux'
import './styles/Searching.css'

export class Searching extends Component{
  constructor(props){
    super(props)
    this.state={
      choice: this.props.state.choice
    }
    this.props.updateChoice(null)
  }

  componentWillUnmount(){
    //remove from store
    let updatedStore = calculateStoreDeductionForTravel(this.props.state)
    this.props.setStore(updatedStore)
  }
  render(){
    setTimeout(()=>{
      this.props.changePage('choice')
    },3000)
    let change;
    if(this.state.choice === "change"){
      change = "Your entire colony packs up and brings what they can as you search for a new home."
    }
    return (<div id="searching" data-test="component-searching">
        <div className="change"> {change} </div>
        <SearchingPreloader />
      </div>

    )
  }
}

function mapStateToProps(reduxState){
  return {
     state: {
       ...reduxState
     }
  }
}

export default connect(mapStateToProps, {updateChoice, setStore})(Searching)
