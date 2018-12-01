import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>

          <Main />
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
