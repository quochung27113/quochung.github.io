import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import FormApp from './Components/Form'
// import TableApp from './Components/TableApp'
import {Component} from 'react';
import Search from "./Components/Search"
import randomstring from 'randomstring'

import { Route, Switch, Link, Redirect } from 'react-router-dom';
import About from "./Pages/About";
import Contact from "./Pages/Contact"
import Home from './Pages/Home'
import Header from './Components/Header';
import Detail from './Pages/Detail';

class App extends Component {
  

  render() {
    
    return (
      <div className="App">
        <Header />
        
          <Redirect from='/' to='/home' />
          <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/home/detail/:idItem' component={Detail} />
          <Route path='/contact' component={Contact} />

          </Switch>
          
      </div>
    );
  }
}

export default App;
