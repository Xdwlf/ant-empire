import React, {Component} from 'react';
import {addUpEffects} from '../utils/effect'
import {describeResourceAsAdjective} from '../utils/display/resources'
import './styles/ResourceCount.css'

/**
 * Displays the resource availability for the current home
 */

class ResourceCount extends Component {
  render(){
    let {eventEffect, resources} = this.props
    let foodEffects = addUpEffects(eventEffect.filter(event=> event.subtype=== 'food'))
    let waterEffects = addUpEffects(eventEffect.filter(event=> event.subtype=== 'water'))
    return(<div id="resource-count" data-test="component-resource-count"><h4>Resources</h4>
      <table>
        <tbody>
          <tr data-test="food-resource"><th>Food:</th>
            <td>{(resources)? describeResourceAsAdjective(resources.food):null}</td>
            <td>{(foodEffects!==0)?
              (<span data-test="compiled-food-effect"> {(foodEffects>0) ? <span className="increasing">⇈</span> : <span className="decreasing">⇊</span>}</span>): null}</td></tr>
          <tr data-test="water-resource"><th>Water:</th>
            <td>{(resources)? describeResourceAsAdjective(resources.water):null}</td>
            <td>{(waterEffects!==0)?
              (<span data-test="compiled-water-effect">{(waterEffects>0) ? <span className="increasing">⇈</span> : <span className="decreasing">⇊</span>}</span>): null}</td></tr>
        </tbody>
      </table>
    </div>)
  }
}

export default ResourceCount
