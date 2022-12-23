import React from 'react'
import logo from './logo.svg';

class Header extends React.Component {
    render() {
        console.log(this.props);
        const {textParent, logName} = this.props;
        return (
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              {textParent}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <button onClick={()=>logName(2)}>Child</button>
          </header>
          )
    }
}

export default Header
