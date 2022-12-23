import './App.css';
import React from 'react';
import Header from './Header';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "demo",
      status: true,
      textParent: "Edit and save to reload.",
    }
    // this.logName = this.logName.bind(this);  IMPORTANTS!!!!!
    
  }

  logName = (value) => {
    this.setState({
      textParent: value,
      text: "something"
    })
  }
  
  changeText = (e) => {
    // console.log(e.target.value);
    let abc = e.target.value;
    this.setState({
      textParent: abc
    })
  }

  render() {
    const {text, status} = this.state;
    return (
      <div className="App">
        <p>{text}</p>
     <Header textParent={this.state.textParent} logName={this.logName} />
     <input onChange={this.changeText} />
     <button onClick={()=>this.logName(1)}>Parent</button>
    </div>
    )
  }
}

export default App;
