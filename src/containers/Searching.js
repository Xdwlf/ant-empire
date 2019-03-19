import React, {Component} from 'react';
import {setStore, updateChoice} from '../actionCreators'
import {calculateStoreDeductionForTravel} from '../utils/travellingUtils'
import {connect} from 'react-redux'

class Searching extends Component{
  constructor(props){
    super(props)
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
    let change = null;
    if(this.props.state.choice === "change"){
      change = "Your entire colony packs up and brings what they can as you search for a new home."
      this.props.updateChoice(null)
    }
    return (<div>
      {change}
      Searching...
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
