import React, {Component} from 'react';
import {describeRiskAsAdjective} from '../utils/display/status'

class RiskCount extends Component {

  render(){
    let {risk} = this.props
    return(<div id="risk-count" data-test="component-risk-count">
      <h4>Risks</h4>
      <table>
        <tr><th>Ant:</th> <td>{describeRiskAsAdjective(risk.ant)}</td></tr>
        <tr><th>Animal:</th> <td>{describeRiskAsAdjective(risk.animal)}</td></tr>
        <tr><th>Human:</th> <td>{describeRiskAsAdjective(risk.human)}</td></tr>
      </table>
    </div>)
  }
}

export default RiskCount
