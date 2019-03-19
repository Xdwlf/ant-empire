import React, {Component} from 'react';
import {connect} from 'react-redux'
import generateHome from '../utils/GenerateHome'
import {setHome, updateGameStatus} from '../actionCreators'

class Choice extends Component{
  constructor(props){
    super(props)
    this.state={
      story:[],
      currentHome: null
    }
    this.selectHome = this.selectHome.bind(this)
  }
  componentWillMount(){
    let currentHome = generateHome()
    let beginning = ["You have wandered upon a new area."]
    let newHomeDesc = beginning.concat(currentHome.description).concat([<div>
              <button onClick={()=> this.props.changePage('searching')}>Keep Looking</button>
              <button onClick={()=>{this.selectHome(this.state.currentHome)}}>Settle Down</button>
            </div>])
    this.setState({currentHome})
    this.interval = setInterval(()=> this.setState({story: [...this.state.story, newHomeDesc.splice(0, 1)]}), 1500)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  selectHome(home){
    this.props.setHome(home)
    this.props.changePage('gameplay')
  }


  render(){
    let story = this.state.story.map((line, idx) => (
      <div key={idx}> {line} </div>
    ))
    return(
      <div>
        <div>{story}</div>
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
