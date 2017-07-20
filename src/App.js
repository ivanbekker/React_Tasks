import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TasksPage from './pages/TasksPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Tasks</h2>
        </div>
        <TasksPage />
      </div>
    );
  }
}

export default App;
