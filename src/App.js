import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import React,  { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    console.log(this.props);
    return (
      <Router>
  
      <div className="App">
          <Route exact path="/" component={FirstPage} />
          <Route exact path="/secondpage" component={SecondPage} />
          <Route exact path="/thirdpage" component={ThirdPage} />
      </div>
      </Router>
    );
  }

}

export default App;
