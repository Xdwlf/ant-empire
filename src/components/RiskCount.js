import React, {Component} from 'react';
import {addUpEffects} from '../utils/effect'
import {describeRiskAsAdjective} from '../utils/display/status'
import './styles/RiskCount.css'

class RiskCount extends Component {

  render(){
    let {risk, eventEffect} = this.props
    let antEffects = addUpEffects(eventEffect.filter(event=> event.subtype=== 'ant'))
    let animalEffects = addUpEffects(eventEffect.filter(event=> event.subtype=== 'animal'))
    let humanEffects = addUpEffects(eventEffect.filter(event=> event.subtype=== 'human'))

    return(<div id="risk-count" data-test="component-risk-count">
      <h4>Risks</h4>
      <table>
        <tbody>
          <tr>
            <th>Ant:</th>
            <td className="data">{describeRiskAsAdjective(risk.ant)}</td>
            <td>{(antEffects!==0)?  ((antEffects>0) ? <span className="increasing">⇈</span> : <span className="decreasing">⇊</span>):null}</td>
          </tr>
          <tr>
            <th>Animal:</th>
            <td className="data">{describeRiskAsAdjective(risk.animal)}</td>
            <td>{(animalEffects!==0)?  ((animalEffects>0) ? <span className="increasing">⇈</span> : <span className="decreasing">⇊</span>):null}</td>
          </tr>
          <tr>
            <th>Human:</th>
            <td className="data">{describeRiskAsAdjective(risk.human)}</td>
            <td>{(humanEffects!==0)? ((humanEffects>0) ? <span className="increasing">⇈</span> : <span className="decreasing">⇊</span>):null}</td>
          </tr>
        </tbody>
      </table>
    </div>)
  }
}

export default RiskCount
