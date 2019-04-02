import React, {Component} from 'react'
import {addUpEffects} from '../utils/effect/'
import './styles/AntCount.css'

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
      <div id="ant-count" data-test="component-ant-count">
        <h4>Your Ants</h4>
        <table>
            <tr><th>Eggs:</th> <td><span data-test="ant-eggs">{ants.eggs}</span> {(eggEffect!==0)? eggEffect: ''}</td> </tr>
            <tr><th>Larvae:</th> <td><span data-test="ant-larvae">{ants.larvae}</span> {(larvaeEffect!==0)? larvaeEffect: ''}</td></tr>
            <tr><th>Pupae:</th> <td><span data-test="ant-pupae">{ants.pupae}</span> {(pupaeEffect!==0)? pupaeEffect: ''}</td></tr>
            <tr><th>Workers:</th> <td><span data-test="ant-worker">{ants.worker}</span> {(workerEffect!==0)? workerEffect: ''}</td></tr>
        </table>
      </div>
    )
  }
}

AntCount.defaultProps={
  ants: null,
  eventEffect: []
}
export default AntCount
