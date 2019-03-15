import React, {Component} from 'react'
import {connect} from 'react-redux'
import {calcEventEffects, compileEffects} from '../utils/generateEvent'
import AntCount from './AntCount'
import ResourceCount from './ResourceCount'

class ColonyStatus extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let {event, ants, home, store, fuel} = this.props.state
    const allEvents = (event)? compileEffects(event): []
    const allEffects = (allEvents.length>0)? allEvents.map(event=> calcEventEffects(event, this.props.state)): []
    let antEvents = allEffects.filter(effect=> effect.type==='ant')
    let resourceEvents = allEffects.filter(effect=> effect.type==='resource')
    let storeEvents = allEvents.filter(effect=> effect.type==='store')

    return(<div><h4>Status Bar</h4>
      <div>
        <div>
          <AntCount ants={ants} eventEffect={ antEvents} reduxState={this.props.state}/>
        </div>
        <div>
          <div>Your Home: {(home)? home.description: null}</div>
          <ResourceCount eventEffect={resourceEvents} resources={(home) ? home.resources: null}/>
          <h4>Storage</h4>
          <div>Food: {store.food}</div>
          <div>Water: {store.water}</div>
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
