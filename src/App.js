import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Login from './Component/Login';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          <Login />
        </p>

      </div>
    );
  }
}



export default App;
