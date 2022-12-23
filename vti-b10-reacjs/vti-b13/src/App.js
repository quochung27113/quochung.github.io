import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormApp from './Components/Form'
import TableApp from './Components/TableApp'
import {Component} from 'react';
import Search from "./Components/Search"


class App extends Component {
  constructor(){
    super();
    this.state= {
      dataApp:[],
      itemSelected: {},
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('data')) {
      localStorage.setItem(
        "data", 
        JSON.stringify([
          {
            id:1, 
            username: "test", 
            name:'Nam', 
            age: 30, 
            classNameApp: "A123"
          },
          {
            id:2,
            username: "test", 
            name:'Nam1', 
            age: 20, 
            classNameApp: "A123",
          },
          {
            id:3,
            username: "test", 
            name:'Nam2', 
            age: 25, 
            classNameApp: "A123",
          },
        ])
      );
    }
    this.setState({
      dataApp: JSON.parse(localStorage.getItem("data")),
    });
  }
  
  handleEdit = (id) => {
    // console.log(id);
    let item = this.state.dataApp.find((item) => {
      // console.log(item);
      return item.id === id;
    });
    console.log(item);
    this.setState({
      itemSelected : item
    });
  };

  submitForm = (data) => {
    // console.log('parent',data);
    const newData = [...this.state.dataApp];
    newData.push(data);
    console.log(newData)
    this.setState({
      dataApp: newData
    });
    localStorage.setItem('data', JSON.stringify(newData))
  }

  render() {
    const {dataApp, itemSelected} = this.state;
    
    return (
      <div className="App">
        <Container>
              <FormApp submitForm={this.submitForm} itemSelected={itemSelected}></FormApp>
              <div className="mt-5">
                  <TableApp dataApp={dataApp} handleEdit={this.handleEdit}></TableApp>
              </div>
          </Container>
      </div>
    );
  }
}

export default App;
