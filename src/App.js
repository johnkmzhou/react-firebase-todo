import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { init } from './firebase';
import HomePage from './HomePage';

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
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
