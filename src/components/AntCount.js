import React, {Component} from 'react'
import {addUpEffects} from '../utils/effect/'

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
      <div data-test="component-ant-count">
        <div>Eggs: <span data-test="ant-eggs">{ants.eggs}</span> {(eggEffect!==0)? eggEffect: ''}</div>
        <div>Larvae: <span data-test="ant-larvae">{ants.larvae}</span> {(larvaeEffect!==0)? larvaeEffect: ''}</div>
        <div>Pupae: <span data-test="ant-pupae">{ants.pupae}</span> {(pupaeEffect!==0)? pupaeEffect: ''}</div>
        <div>Worker Ants: <span data-test="ant-worker">{ants.worker}</span> {(workerEffect!==0)? workerEffect: ''}</div>
      </div>
    )
  }
}

AntCount.defaultProps={
  ants: null,
  eventEffect: []
}
export default AntCount
