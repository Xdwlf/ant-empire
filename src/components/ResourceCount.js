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
    return(<div data-test="component-resource-count"><h4>Resources</h4>
      <div data-test="food-resource">Food: {(resources)? resources.food:null} {(foodEffects!==0)?
        (<span data-test="compiled-food-effect"> {(foodEffects>0) ? '+' : ''}{foodEffects}</span>): null}</div>
      <div data-test="water-resource">Water: {(resources)?resources.water:null} {(waterEffects!==0)?
        (<span data-test="compiled-water-effect">{(waterEffects>0) ? '+' : ''}{waterEffects}</span>): null}</div>
    </div>)
  }
}

export default ResourceCount
