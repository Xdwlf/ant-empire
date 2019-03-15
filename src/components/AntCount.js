import React, {Component} from 'react'
import {addUpEffects, calcEventEffects} from '../utils/generateEvent'

class AntCount extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let {ants, eventEffect} = this.props
    let eggEffect = addUpEffects(eventEffect.filter(event => event.subtype === 'eggs'))
    let larvaeEffect = addUpEffects(eventEffect.filter(event => event.subtype === 'larvae'))
    let pupaeEffect = addUpEffects(eventEffect.filter(event => event.subtype === 'pupae'))
    let workerEffect = addUpEffects( eventEffect.filter(event => event.subtype === 'worker') )
    return (
      <div>
        <div>Eggs: {ants.eggs} {(eggEffect!==0)? eggEffect: ''}</div>
        <div>Larvae: {ants.larvae} {(larvaeEffect!==0)? larvaeEffect: ''}</div>
        <div>Pupae: {ants.pupae} {(pupaeEffect!==0)? pupaeEffect: ''}</div>
        <div>Worker Ants: {ants.worker} {(workerEffect!==0)? workerEffect: ''}</div>
      </div>
    )
  }
}

export default AntCount
