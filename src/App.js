import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { init } from './firebase';
import Routes from './Routes';

import configureStore from './configureStore';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    init();
    this.store = configureStore();
  }

  render() {
    return (
      <Provider store={this.store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
