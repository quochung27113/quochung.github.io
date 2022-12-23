import './App.css';
import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: "",
      password: "",
    }
  }
  changeInputValue = (e) => {
    let target = e.target;
    let name = target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  render(){
    const {text, password,} = this.state;
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input value={text} onChange={this.changeInputValue} name='text' />
          <input value={password} onChange={this.changeInputValue}  name='password'/>
          <input  type="submit" />
        </form>
        <p>{text}</p>
        <p>{password}</p>
      </div>
    );
  }
 
}

export default App;
