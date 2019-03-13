import React, {Component} from 'react';

class Searching extends Component{
  constructor(props){
    super(props)
  }
  render(){
    setTimeout(()=>{
      this.props.changePage('choice')
    },3000)
    return 'Searching...'
  }
}

export default Searching
