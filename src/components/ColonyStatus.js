import React, {Component} from 'react'
import {connect} from 'react-redux'
import {calcEventEffects, compileEffects} from '../utils/generateEvent'
import '../App.css'
import './styles/ColonyStatus.css'
import AntCount from './AntCount'
import ResourceCount from './ResourceCount'
import StoreCount from './StoreCount'

export class ColonyStatus extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let {event, ants, home, store} = this.props.state
    let antEvents = event.filter(effect=> effect.type==='ant')
    let resourceEvents = event.filter(effect=> effect.type==='resource')
    let storeEvents = event.filter(effect=> effect.type==='store')
    return(<div className="sidebar" data-test="component-colony-status" ><h4>Status Bar</h4>
      <div>
        <div>
          <AntCount ants={ants} eventEffect={ antEvents} reduxState={this.props.state}/>
        </div>
        <div>
          <StoreCount eventEffect={storeEvents} store={store} />
        </div>
        {(home)? (
          <div>
            <div>Your Home: <span data-test="home-description">{(home)? home.description: null}</span></div>
            <ResourceCount eventEffect={resourceEvents} resources={(home) ? home.resources: null}/>
            <h4>Weather: <span data-test="weather-description">{(home)? home.weather.temperature.desc + ' and ' + home.weather.humidity.desc:null}</span></h4>
          </div>):null
        }

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
