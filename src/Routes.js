import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './HomePage';
import ShowTodoPage from './ShowToDoPage';
import { loadSections } from './actions/todo';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.props.loadSections();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path='/:id' component={ShowTodoPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, { loadSections })(Routes);
