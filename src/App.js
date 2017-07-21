import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import logo from './logo.svg';
import './App.css';
import TasksPage from './pages/TasksPage'

let store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React Tasks</h2>
            </div>
            <TasksPage />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
