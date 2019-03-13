import React, {Component} from 'react';
import {connect} from 'react-redux'
import generateHome from '../utils/GenerateHome'
import {setHome, updateGameStatus} from '../actionCreators'

class Choice extends Component{
  constructor(props){
    super(props)
    this.state={
      story:[]
    }
    this.generateStory= this.generateStory.bind(this)
    this.generateStory(this.props.fuel)
    this.selectHome = this.selectHome.bind(this)
  }
  generateStory(fuel){
    let deductFuel = Math.floor(Math.random()*20)
    let narrative;
    let i=0;
    if(fuel < 20 && fuel-deductFuel<=0){
      narrative = ["You have run out of fuel.", "Your journey is over", <button>Start Over</button>]
      this.props.updateGameStatus(false)
    } else{
      //user props to generate a story

    }
  }
  selectHome(home){
    this.props.setHome(home)
    this.props.changePage('gameplay')
  }
  render(){
    let newHome = generateHome()
    let newHomeDesc = newHome.description
    return(
      <div>
        <div>You have wandered upon a new area.</div>
        <div>{newHomeDesc}</div>
        <button onClick={()=> this.props.changePage('searching')}>Keep Looking</button>
        <button onClick={()=>{this.selectHome(newHome)}}>Settle Down</button>
      </div>
    )
  }
}

function mapStateToProps(reduxState){
  return {
    ...reduxState
  }
}

export default connect(mapStateToProps, {setHome, updateGameStatus})(Choice)
