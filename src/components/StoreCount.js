import React, {Component} from 'react';
import {addUpEffects} from '../utils/generateEvent'


class StoreCount extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let {store, eventEffect} = this.props;
    const waterEffect = addUpEffects(eventEffect.filter(event => event.subtype === "water"))
    const foodEffect = addUpEffects(eventEffect.filter(event => event.subtype === "food"))
    return(
      <div data-test="component-store-count">
        <h4>Storage</h4>
          <div>Food: <span data-test="food-store">{store.food}</span> {(foodEffect!==0)?
            (<span data-test="food-effect">{(foodEffect>0)? '+':''}{foodEffect}</span>): ''}</div>
          <div>Water: <span data-test="water-store">{store.water}</span> {(waterEffect!==0)?
            (<span data-test="water-effect">{(waterEffect>0)? '+':''}{waterEffect}</span>): ''}</div>
      </div>)
  }
}

export default StoreCount
