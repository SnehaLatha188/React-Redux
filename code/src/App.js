import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import Code from './Components/code'; 
import CodeForm from'./Components/codeForm'; 
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CodeForm/>
        <hr/>
        <Code/>
      </div>
      </Provider>
    );
  }
}

export default App;
