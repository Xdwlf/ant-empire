import React, {Component} from 'react'
import {connect} from 'react-redux'
import {calcEventEffects, compileEffects} from '../utils/generateEvent'
import AntCount from './AntCount'
import ResourceCount from './ResourceCount'
import StoreCount from './StoreCount'

class ColonyStatus extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let {event, ants, home, store, fuel} = this.props.state
    let antEvents = event.filter(effect=> effect.type==='ant')
    let resourceEvents = event.filter(effect=> effect.type==='resource')
    let storeEvents = event.filter(effect=> effect.type==='store')

    return(<div><h4>Status Bar</h4>
      <div>
        <div>
          <AntCount ants={ants} eventEffect={ antEvents} reduxState={this.props.state}/>
        </div>
        <div>
          <div>Your Home: {(home)? home.description: null}</div>
          <ResourceCount eventEffect={resourceEvents} resources={(home) ? home.resources: null}/>
          <StoreCount eventEffect={storeEvents} store={store} />
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
