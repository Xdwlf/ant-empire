import React, {Component} from 'react';
import {addUpEffects} from '../utils/generateEvent'

class ResourceCount extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let {eventEffect, resources} = this.props
    let foodEffects = addUpEffects(eventEffect.filter(event=> event.subtype=== 'food'))
    let waterEffects = addUpEffects(eventEffect.filter(event=> event.subtype=== 'water'))
    return(<div><h4>Resources</h4>
      <div>Food: {(resources)? resources.food:null} {(foodEffects!==0)? foodEffects: null}</div>
      <div>Water: {(resources)?resources.water:null} {(waterEffects!==0)? ((waterEffects>0) ? "+": "") + waterEffects: null}</div>
    </div>)
  }
}

export default ResourceCount
