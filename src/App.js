import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Count is { this.props.count } with students near about { this.props.students }
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}



export default connect(mapStateToProps)(App);


