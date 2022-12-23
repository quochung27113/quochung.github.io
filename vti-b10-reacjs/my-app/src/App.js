import './App.css';
import React from 'react';
import Count from './Count';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      text: 'demo',
      status: true,
      textParent: 'Edit and save to reload',
      result:0,
    }
  }
  
  decre = () => {
    this.setState(
      {
        result: this.state.result -1,
      }
    )
  }
  incre = () => {
    this.setState(
    {
      result: this.state.result +1,
    }
  )}

  render(){
    const {text, status, result} = this.state;
    return (
      <div className = "App">
        <h1>{result}</h1>
        <Count prev = {this.decre} next = {this.incre} />
      </div>
    )
  }
}
export default App;