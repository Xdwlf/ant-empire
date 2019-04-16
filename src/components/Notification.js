import React, {Component} from 'react'
import "./styles/Notification.css";
/**
 * Notification Component
 * Pops up whenever game is over
 */
class Notification extends Component{
  constructor(props){
    super(props)
    //If stats should be displayed on notification
    this.state={
      stats:false
    }
    this.viewStats= this.viewStats.bind(this)
    this.viewNarrative = this.viewNarrative.bind(this)
  }
  viewStats(){
    this.setState({stats:true})
  }
  viewNarrative(){
    this.setState({stats:false})
  }
  render(){
    const {stats} = this.props;
    /* If view stats has not been clicked, show the narrative. Otherwise, display the stats.
     */
    let content = (!this.state.stats)? (<div>
        {this.props.notification}
        <div className="button-group">
          <button onClick={this.props.resetGame}>Play Again</button>
          <button onClick={this.viewStats}>View Stats</button>
        </div>
        </div>): <div>
          <table>
            <h4>Stats</h4>
            <tbody>
              <tr><td>Days Lived:</td><td>{stats.day}</td></tr>
              <tr><td>Max Ants:</td><td>{stats.maxAnts}</td></tr>
              <tr><td>Homes Lived In: </td><td>
                  <ul>
                    {stats.homes.map(h=>(
                      <li>{h}</li>
                    ))}
                  </ul>
                  </td>
              </tr>
            </tbody>
            <div className="button-group">
              <button onClick={this.props.resetGame}>Play Again</button>
              <button onClick={this.viewNarrative}>Go Back</button>
            </div>
          </table>

        </div> ;
    return (<div id="notification">
      {content}
      </div>)
  }
}

export default Notification
