import React, {Component} from 'react'
import ReactTooltip from 'react-tooltip'
import {addDay} from '../actionCreators'
import {connect} from 'react-redux'
import './styles/Gameplay.css'

/**
 * Gameplay Page
 * Renders 4 choices that player may choose to impact their game
 */
export class Gameplay extends Component{

  /**
   * Increases the day in the redux state by 1
   */
  componentWillUnmount(){
    this.props.addDay()
  }

  render(){
    let {setChoice, ants} = this.props
    return (
      <div id="gameplay" data-test="component-gameplay">
        <h4>What would you like to do?</h4>
              <div id="choices">
                  <div>
                    <button onClick={()=> setChoice('birth')}>Focus on Birthing Workers</button>
                    <button onClick={()=> setChoice('change')}>Change Homes</button>
                  </div>

                  {/**If there are no worker ants, then disable some choices. */}
                    {(ants && ants.worker>0)?
                      <div>
                          <button onClick={()=> setChoice('defend')}>Be on the Defensive</button>
                          <button onClick={()=> setChoice('expand')}>Scout for Resources</button>
                      </div>:
                      <div>
                          <span data-tip data-for="worker-warning"><button onMouseEnter={this.showWarning} disabled>Be on the Defensive</button></span>
                          <span data-tip data-for="worker-warning"><button onMouseEnter={this.showWarning} data-tip data-for="worker-warning" disabled>Scout for Resources</button></span>
                          <ReactTooltip className="warning-tooltip" id="worker-warning" type="error" effect="solid">
                            <span>You must have at least one worker ant to do that.</span>
                          </ReactTooltip>
                      </div>
                    }

              </div>

    </div>)
  }
}

function mapStateToProps(reduxState){
  return {
    stats: reduxState.stats,
    ants: reduxState.ants
    }
}

export default connect(mapStateToProps, {addDay})(Gameplay)
