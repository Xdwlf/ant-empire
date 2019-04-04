import React, {Component} from 'react'
import './styles/Gameplay.css'

class Gameplay extends Component{

  render(){
    let {setChoice} = this.props
    return (
      <div id="gameplay" data-test="component-gameplay">
        <h4>What would you like to do?</h4>

          <div id="choices">
            <div>
              <button onClick={()=> setChoice('birth')}>Focus on Birthing Workers</button>
              <button onClick={()=> setChoice('expand')}>Scout for Resources</button>
            </div>
            <div>
              <button onClick={()=> setChoice('defend')}>Be on the Defensive</button>
              <button onClick={()=> setChoice('change')}>Change Homes</button>
            </div>
          </div>
    </div>)
  }
}

export default Gameplay
