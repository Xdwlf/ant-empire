import React, {Component} from 'react';
import '../App.css'
import {CSSTransition} from 'react-transition-group'

const narrative = ['', "You are a queen bee looking for a new home. After leaving your childhood home, you set out for a new life.",
'You are looking for the best place to establish a new ant colony.']

class Prequel extends Component{
  constructor(props){
    super(props);
    this.state={
      story: []
    }
    this.fadeThroughStory = this.fadeThroughStory.bind(this)
    this.fadeThroughStory(narrative)
  }

  fadeThroughStory(arr){
    let count = 0;
    var interval = setInterval(()=>{
      let nextLine = arr[count]
      if(count< arr.length){
        this.setState({story: [...this.state.story, nextLine]})
        count++
      } else{
        this.setState({story: [...this.state.story,
            <button onClick={()=> this.props.changePage('choice')}>Start</button>]})
        clearInterval(interval)
      }
    }, 1000)

  }
  render(){
    let divs = this.state.story.map((line,idx)=> <div key={idx}>{line}</div>)
    return (
      <div data-test="component-prequel">
        {this.state.story.map((line,idx)=> (
          <CSSTransition
            in={true}
            appear={true}
            key={idx}
            timeout={500}
            classNames="fade"
          >
            <div key={idx}>{line}</div>
          </CSSTransition>
        ))
        }
      </div>)
  }
}

export default Prequel;
