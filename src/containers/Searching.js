import React, {Component} from 'react';
import {setStore, updateChoice} from '../actionCreators'
import {calculateStoreDeductionForTravel} from '../utils/travel'
import {connect} from 'react-redux'

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
    return (<div data-test="component-searching">
      <div> {change} </div>
      <div> Searching... </div>
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
