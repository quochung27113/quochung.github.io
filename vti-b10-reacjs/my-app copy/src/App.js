import './App.css';
import React from 'react';
import Count from './Count';
import Info from './Info';
import Table from './Table';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // text: 'demo',
      // status: true,
      // textParent: 'Edit and save to reload',
      result: 0,
      styleOjb: {},
      arrInfo: [
        {
          id:1,
          fullName: 'Name 1',
          age: 10,
        },
        {
          id:2,
          fullName: 'Name 2',
          age: 20,
        },
        {
          id:3,
          fullName: 'Name 3',
          age: 30,
        },
      ],
      isRender: false,
      tableHeader: {
        col1: 'ID',
        col2: 'Fullname',
        col3: 'Age'
      }
    }
  }

  decreCount = () => {
    this.setState(
      {
        result: this.state.result - 1,
      }
    )
  }
  increCount = () => {
    this.setState(
      {
        result: this.state.result + 1,
      }
    )
  }

  styleH1 = () => {
    this.setState({
      styleOjb: {
        backgroundColor: 'red',
        fontSize: '100px',
      }
    })
  }
  renderInfo = () => {
    console.log('ere')
    return this.state.arrInfo.map((item, index) => {
      return <Info key={index} fullName={item.fullName} age={item.age} />
    })
  }
  handleRender = () => {
    this.setState({
      isRender: true,
    })
  }
  render() {
    const { result, styleOjb, arrInfo, isRender, tableHeader } = this.state;
    return (
      <div className="App">
        {/* <h1 style={styleOjb}>{result}</h1>
        <Count prev = {this.decreCount} next = {this.increCount} />
        <button onClick={this.styleH1}>Change style</button> */}

        {/* <button onClick={this.handleRender} >Render</button>
        {
          isRender ? this.renderInfo() : <p>Chua co du lieu </p> 
        } */}

        {/* {
          this.renderInfo()
        } */}
        <h2>HTML Table</h2>
        <Table arrInfo={arrInfo} tableHeader={tableHeader}/>
      </div>
    )
  }
}
export default App;