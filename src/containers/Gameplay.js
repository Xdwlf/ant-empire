import React, {Component} from 'react'

class Gameplay extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let {setChoice} = this.props
    return (
      <div data-test="component-gameplay">
        <h4>What would you like to do?</h4>

        <div>
          <button onClick={()=> setChoice('birth')}>Focus on Birthing Workers</button>
        </div>
        <div>
          <button onClick={()=> setChoice('expand')}>Expand Territory to find more Resources</button>
        </div>
        <div>
          <button onClick={()=> setChoice('defend')}>Be on the Defensive</button>
        </div>
        <div>
          <button onClick={()=> setChoice('change')}>Change Homes</button>
        </div>
    </div>)
  }
}

export default Gameplay
