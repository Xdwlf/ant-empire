import React, {Component} from 'react';
import {addUpEffects} from '../utils/effect'
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
          <tr><th>Food:</th> <td><span data-test="food-store">{store.food}</span> {(foodEffect!==0)?
            (<span data-test="food-effect">{(foodEffect>0)? '+':''}{foodEffect}</span>): ''}</td></tr>
          <tr><th>Water:</th> <td><span data-test="water-store">{store.water}</span> {(waterEffect!==0)?
            (<span data-test="water-effect">{(waterEffect>0)? '+':''}{waterEffect}</span>): ''}</td></tr>
        </table>
      </div>)
  }
}

export default StoreCount
