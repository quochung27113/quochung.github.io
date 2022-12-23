import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Count from './Count';
import Info from './Info';
import Table from './Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemDetail from './ItemDetail'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      text: 'demo',
      status: true,
      textParent: 'Edit and save to reload',
      result:0,
      styleObj: {},
      arrInfo: [
        { id:1, fullName: 'Name 1', age: 10},
        { id:2, fullName: 'Name 2', age: 13},
        { id:3, fullName: 'Name 3', age: 14}
      ],
      isRender: false,
      tableHeader: {
        col1: 'fullName',
        col2: 'age',
        col3: 'id'
      },
      itemRenderUI: {},
    }
  }
  
  decre = (value) => {
    this.setState({
        result: value,
      })
    }
  incre = (value) => {
    this.setState({
        result: value,
      })
  }

  styleH1 = () => {
    this.setState({
        styleObj: {
          backgroundColor : 'red',
          fontSize:'100px'
        }
      }
    );
  };

  renderInfo = () => {
    return this.state.arrInfo.map((item,index) =>{
      return <info key={index} fullName={item.fullName} age={item.age}></info>
    });
  };

  handleRender = () => {
    this.setState({
      isRender:true,
    });
  };

  getDetail = (id) => {
    let itemRender = this.state.arrInfo.filter((item) => item.id === id);
    console.log(itemRender, "test1")
    this.setState({
      itemRenderUI: itemRender[0]
    })
  }


  render(){
    const {result, styleObj, arrInfo, isRender, tableHeader, itemRenderUI} = this.state;
    return (
      <div className = "App">
        {/* <h1 style={styleObj}>{result}</h1>
        <Count prev = {this.decre} next = {this.incre}/>
        <button onClick={this.handleRender}>Render</button>
      {
        isRender || <p>Chua co du lieu</p>
      } */}

      <Container>
        <Row>
          <Col lg="2">
            <div className='menu'>
                <ul>
                  {arrInfo.map((item) => {
                    return (
                    <li key={item.id} onClick={()=> this.getDetail(item.id)}>
                      {item.fullName}
                    </li>
                    );
                    })}
                </ul>
            </div>
          </Col>
          <Col>
                  <p>Content</p> 
                  <ItemDetail itemRenderUI={itemRenderUI}>

                  </ItemDetail>
          </Col>
        </Row>
      </Container>

      {/* <form onSubmit={this.onSubmit}>
        <input value={text} onChange={this.ch}>

        </input>

      </form> */}

      </div>
    )
  }
}
export default App;
