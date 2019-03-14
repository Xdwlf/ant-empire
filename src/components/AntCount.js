import React, {Component} from 'react'

class AntCount extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let {ants, eventEffect} = this.props
    let number = (eventEffect) ? Math.abs(eventEffect.number): null;
    return (
      <div>
        <div>Eggs: {ants.eggs} {(eventEffect && eventEffect.number!==0 && eventEffect.subtype==='eggs')? eventEffect.value + number: ''}</div>
        <div>Larvae: {ants.larvae} {(eventEffect && eventEffect.number!==0 && eventEffect.subtype==='larvae')? eventEffect.value + number: ''}</div>
        <div>Pupae: {ants.pupae} {(eventEffect && eventEffect.number!==0 && eventEffect.subtype==='pupae')? eventEffect.value + number: ''}</div>
        <div>Worker Ants: {ants.worker} {(eventEffect && eventEffect.number!==0 && eventEffect.subtype==='worker')? eventEffect.value + number: ''}</div>
      </div>
    )
  }
}

export default AntCount
