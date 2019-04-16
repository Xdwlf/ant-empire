import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../App.css'
import './styles/ColonyStatus.css'
import AntCount from './AntCount'
import ResourceCount from './ResourceCount'
import StoreCount from './StoreCount'
import RiskCount from './RiskCount'

/**
 * ColonyStatus
 * Status bar that displays information about the current game for the Player
 */

export class ColonyStatus extends Component{

  render(){
    let {event, ants, home, store} = this.props.state
    //Separates out the effects into the categories to render independently
    let antEvents = event.filter(effect=> effect.type==='ant')
    let resourceEvents = event.filter(effect=> effect.type==='resource')
    let storeEvents = event.filter(effect=> effect.type==='store')
    let riskEvents = event.filter(effect=> effect.type==='risk')

    return(<div className="sidebar" data-test="component-colony-status" >
      <div>
        <div className='status-section'>
          {/*Displays current number of ants}*/}
          <div className='sub-section'>
            <AntCount ants={ants} eventEffect={ antEvents} reduxState={this.props.state}/>
          </div>
          {/*Displays current amount of food and water in store*/}
          <div className='sub-section'>
            <StoreCount eventEffect={storeEvents} store={store} />
          </div>
        </div>
          {/*If home is set, display home and weather*/}
        {(home)? (
          <div className='status-section'>
            <div className='sub-section home'><h4>Your Home:</h4> <div data-test="home-description">{(home)? home.description: null}</div></div>
            <div className='sub-section home'><h4>Weather:</h4> <div data-test="weather-description">{(home)? home.weather.temperature.desc + ' and ' + home.weather.humidity.desc:null}</div></div>
          </div>):null
        }
          {/*If home is set, display risk and resource*/}
        {(home)? (
          <div className='status-section'>
            <RiskCount risk={this.props.state.home.risk} eventEffect={riskEvents} />
            <ResourceCount eventEffect={resourceEvents} resources={(home) ? home.resources: null}/>
          </div>):null
        }

      </div>
      <button id="start-over" className="ui button" onClick={this.props.resetGame}>Start Over</button>
      </div>)
  }
}

function mapStateToProps(reduxState){
  return {
    state: {...reduxState}
  }
}

export default connect(mapStateToProps)(ColonyStatus)
