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

    return(<div>
      <h4>Storage</h4>
      <div>Food: {store.food} {(foodEffect!==0)? foodEffect: ''}</div>
      <div>Water: {store.water} {(waterEffect!==0)? waterEffect: ''}</div>
    </div>)
  }
}

export default StoreCount
