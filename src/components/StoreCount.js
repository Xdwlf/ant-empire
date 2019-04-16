import React, {Component} from 'react';
import {addUpEffects} from '../utils/effect'
import {scale} from '../utils/display/styles'
import {addStyleToText, styleByValue} from '../utils/display/colorize'
import './styles/StoreCount.css'

class StoreCount extends Component{
  render(){
    let {store, eventEffect} = this.props;
    const waterEffect = addUpEffects(eventEffect.filter(event => event.subtype === "water"))
    const foodEffect = addUpEffects(eventEffect.filter(event => event.subtype === "food"))
    return(
      <div id="store-count" data-test="component-store-count">
        <h4>Storage</h4>
        <table>
          <tbody>
            <tr>
              <th>Food:</th>
              <td className="data"><span data-test="food-store">{store.food}</span></td>
              <td className="effect">{(foodEffect!==0)?
              (<span data-test="food-effect">{(foodEffect>0)? addStyleToText('+', scale.okay):null}{styleByValue(foodEffect)}</span>): null}</td>
            </tr>
            <tr>
              <th>Water:</th>
              <td className="data"><span data-test="water-store">{store.water}</span></td>
              <td className="effect">{(waterEffect!==0)?
              (<span data-test="water-effect">{(waterEffect>0)? addStyleToText('+', scale.okay):null}{styleByValue(waterEffect)}</span>): null}</td>
            </tr>
          </tbody>
        </table>
      </div>)
  }
}

export default StoreCount
