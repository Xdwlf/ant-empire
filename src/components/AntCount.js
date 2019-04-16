import React, {Component} from 'react'
import {addUpEffects} from '../utils/effect/'
import {scale} from '../utils/display/styles'
import {addStyleToText, styleByValue} from '../utils/display/colorize'
import './styles/AntCount.css'

/**
 * Ant Count
 * Renders a table in the Colony Status bar that shows the number of ants for each type
 */

class AntCount extends Component{
  render(){
    let {ants, eventEffect} = this.props
    //Filter out effects by category so it can be displayed while not yet impacting redux state yet
    let eggEffect = addUpEffects(eventEffect.filter(event => event.subtype === 'eggs'))
    let larvaeEffect = addUpEffects(eventEffect.filter(event => event.subtype === 'larvae'))
    let pupaeEffect = addUpEffects(eventEffect.filter(event => event.subtype === 'pupae'))
    let workerEffect = addUpEffects( eventEffect.filter(event => event.subtype === 'worker') )
    return (
      <div id="ant-count" data-test="component-ant-count">
        <h4>Your Ants</h4>
        <table>
          <tbody>
            <tr>
              <th>Eggs:</th>
              <td className="data"><span data-test="ant-eggs">{ants.eggs}</span></td>
              <td className="effect">{(eggEffect>0)? addStyleToText('+', scale.okay):''}{(eggEffect!==0)? styleByValue(eggEffect): ''}</td>
            </tr>
            <tr>
              <th>Larvae:</th>
              <td className="data"><span data-test="ant-larvae">{ants.larvae}</span></td>
              <td className="effect">{(larvaeEffect>0)? addStyleToText('+', scale.okay):''}{(larvaeEffect!==0)? styleByValue(larvaeEffect): ''}</td>
            </tr>
            <tr>
              <th>Pupae:</th>
              <td className="data"><span data-test="ant-pupae">{ants.pupae}</span></td>
              <td className="effect">{(pupaeEffect>0)? addStyleToText('+', scale.okay):''}{(pupaeEffect!==0)? styleByValue(pupaeEffect): ''}</td>
            </tr>
            <tr>
              <th>Workers:</th>
              <td className="data" data-test="ant-worker">{ants.worker}</td>
              <td className="effect">{(workerEffect>0)? addStyleToText('+', scale.okay):''}{(workerEffect!==0)? styleByValue(workerEffect): ''}</td></tr>
          </tbody>
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
