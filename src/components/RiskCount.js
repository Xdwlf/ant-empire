import React, {Component} from 'react';

class RiskCount extends Component {

  render(){
    let {risk} = this.props
    return(<div id="risk-count" data-test="component-risk-count">
      <h4>Risks</h4>
      <table>
        <tr><th>Ant:</th> <td>{risk.ant}</td></tr>
        <tr><th>Animal:</th> <td>{risk.animal}</td></tr>
        <tr><th>Human:</th> <td>{risk.human}</td></tr>
      </table>
    </div>)
  }
}

export default RiskCount
