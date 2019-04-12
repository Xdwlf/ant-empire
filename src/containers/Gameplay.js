import React, {Component} from 'react'
import {addDay} from '../actionCreators'
import {connect} from 'react-redux'
import './styles/Gameplay.css'

export class Gameplay extends Component{
  constructor(props){
    super(props)
    this.state={
      warning: false
    }
    this.showWarning = this.showWarning.bind(this)
  }
  showWarning(){
    this.setState({warning:true})
  }

  componentWillUnmount(){
    this.props.addDay()
  }

  render(){
    let {setChoice, ants} = this.props
    let warning = (this.state.warning)? "You must have at least one worker ant to do that.": null

    return (
      <div id="gameplay" data-test="component-gameplay">
        <h4>What would you like to do?</h4>
              <div className="warning">{warning}</div>
              <div id="choices">
                  <div>
                    <button onClick={()=> setChoice('birth')}>Focus on Birthing Workers</button>
                    <button onClick={()=> setChoice('change')}>Change Homes</button>
                  </div>
                    {(ants && ants.worker>0)?
                      <div>
                          <button onClick={()=> setChoice('defend')}>Be on the Defensive</button>
                          <button onClick={()=> setChoice('expand')}>Scout for Resources</button>
                      </div>:
                      <div>
                          <button onMouseEnter={this.showWarning} disabled>Be on the Defensive</button>
                          <button onMouseEnter={this.showWarning} disabled>Scout for Resources</button>
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
