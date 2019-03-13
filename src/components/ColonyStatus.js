import React, {Component} from 'react'
import {connect} from 'react-redux'

class ColonyStatus extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let {ants, home, store, fuel} = this.props
    return(<div><h4>Status Bar</h4>
      <div>
        <div>
          <div>Eggs: {ants.eggs}</div>
          <div>Larvae: {ants.larvae}</div>
          <div>Pupae: {ants.pupae}</div>
          <div>Worker Ants: {ants.worker}</div>
        </div>
        <div>
          <div>Your Home: {(home)? home.description: null}</div>
          <h4>Resources</h4>
          <div>Food: {(home)? home.resources.food: null}</div>
          <div>Water: {(home)? home.resources.water: null}</div>
          <h4>Storage</h4>
          <div>Food: {store.food}</div>
          <div>Water: {store.water}</div>
          <h4>Fuel: {fuel}</h4>
          <h4>Weather: {(home)? home.weather.temperature.desc + ' and ' + home.weather.humidity.desc:null}</h4>
        </div>
      </div>
      </div>)
  }
}

function mapStateToProps(reduxState){
  return {
    ...reduxState
  }
}

export default connect(mapStateToProps)(ColonyStatus)
