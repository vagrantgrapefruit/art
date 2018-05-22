import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Login from './Component/Login';
import styles from'./App.css';



class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
        </header>
        <p className={styles['App-intro']}>
          <Login />
        </p>

      </div>
    );
  }
}



export default App;
