import React, {Component} from 'react';
import '../App.css'
import './styles/Prequel.css'
import {CSSTransition} from 'react-transition-group'

const narrative = ['', "You are a young queen ant. You've spent your entire childhood inside your mother's colony. While lacking for nothing, recently you've felt a bit restless. You and the rest of the young queens and winged males feel like there's something different these few days.",
"A strange urge seems to pulling you from your home and you finally can't resist. Along with your brothers and sister spread to take flight, scattering quickly across the land and mating with ants from other colonies. For a few weeks, the skies are covered in young winged ants.",
"Soon, you set off searching for a place to build your own colony. Endless dangers await you along the way and the vast majority of young queen ants like yourself will survive to safely establish a colony. Will you?"]

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
    return (
      <div id="prequel" data-test="component-prequel">
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
