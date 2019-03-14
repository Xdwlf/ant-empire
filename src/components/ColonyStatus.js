import React, {Component} from 'react'
import {connect} from 'react-redux'
import {calcEventEffects} from '../utils/generateEvent'
import AntCount from './AntCount'

class ColonyStatus extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let {event, ants, home, store, fuel} = this.props.state
    let eventEffect = (event)? calcEventEffects(event, this.props.state) : null;
    console.log(eventEffect)
    return(<div><h4>Status Bar</h4>
      <div>
        <div>
          <AntCount ants={ants} eventEffect={(eventEffect && eventEffect.type==='ant')? eventEffect: null}/>
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
    state: {...reduxState}
  }
}

export default connect(mapStateToProps)(ColonyStatus)
