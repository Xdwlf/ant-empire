import React, {Component} from 'react'
import {addUpEffects} from '../utils/effect/'
import ReactTooltip from 'react-tooltip'

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
              <th data-tip data-for="egg-info">Eggs:</th>
              <td className="data"><span data-test="ant-eggs">{ants.eggs}</span></td>
              <td className="effect">{(eggEffect>0)? addStyleToText('+', scale.okay):''}{(eggEffect!==0)? styleByValue(eggEffect): ''}</td>
            </tr>
            <tr>
              <th data-tip data-for="larvae-info">Larvae:</th>
              <td className="data"><span data-test="ant-larvae">{ants.larvae}</span></td>
              <td className="effect">{(larvaeEffect>0)? addStyleToText('+', scale.okay):''}{(larvaeEffect!==0)? styleByValue(larvaeEffect): ''}</td>
            </tr>
            <tr>
              <th data-tip data-for="pupae-info"> Pupae:</th>
              <td className="data"><span data-test="ant-pupae">{ants.pupae}</span></td>
              <td className="effect">{(pupaeEffect>0)? addStyleToText('+', scale.okay):''}{(pupaeEffect!==0)? styleByValue(pupaeEffect): ''}</td>
            </tr>
            <tr>
              <th data-tip data-for="worker-info">Workers:</th>
              <td className="data" data-test="ant-worker">{ants.worker}</td>
              <td className="effect">{(workerEffect>0)? addStyleToText('+', scale.okay):''}{(workerEffect!==0)? styleByValue(workerEffect): ''}</td>
            </tr>
          </tbody>
        </table>
        <ReactTooltip className="info-tooltip" id="egg-info" type="light" effect="float">
                            <span>All ants begin as an egg. Ant eggs are soft, oval, and tiny – about the size of a period at the end of a sentence. Not all eggs are destined to become adults – some are eaten by nestmates for extra nourishment.</span>
            </ReactTooltip>
            <ReactTooltip className="info-tooltip" id="larvae-info" type="light" effect="float">
                            <span>An egg hatches into a worm-shaped larva with no eyes or legs. Larvae are eating machines that rely on adults to provide a constant supply of food. As a result, they grow rapidly, molting between sizes.</span>
            </ReactTooltip>
            <ReactTooltip className="info-tooltip" id="pupae-info" type="light" effect="float">
                            <span>When a larvae is large enough, it metamorphoses into a pupa. This is a stage of rest and reorganization. Pupae look more like adults, but their legs and antennae are folded against their bodies. They start out whitish and gradually become darker.</span>
            </ReactTooltip>
            <ReactTooltip className="info-tooltip" id="worker-info" type="light" effect="float">
                            <span>Worker ants are full-grown when born. Their exoskeletons prevent them from getting any larger. They do not reproduce, but perform other jobs, such as taking care of the brood, building and cleaning the nest, and gathering food. Workers are wingless and typically survive for several months.</span>
        </ReactTooltip>
      </div>
    )
  }
}

AntCount.defaultProps={
  ants: null,
  eventEffect: []
}
export default AntCount
