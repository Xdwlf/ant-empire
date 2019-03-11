import React, {Component} from 'react';

class Enter extends Component{
  render(){
    let {changePage} = this.props
    return(
      <div>
        Welcome to the Ant Empire.
        <button className='ui button' onClick={()=> changePage('prequel')}>Enter</button>
      </div>
    )
  }
}

export default Enter;
