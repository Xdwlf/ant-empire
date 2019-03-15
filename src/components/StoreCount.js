import React, {Component} from 'react';

class StoreCount extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let {store, eventEffect} = this.props;
    return(<div>
      <h4>Storage</h4>
      <div>Food: {store.food}</div>
      <div>Water: {store.water}</div>
    </div>)
  }
}

export default StoreCount
