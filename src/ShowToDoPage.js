import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import { getSectionById } from './reducers/todo';

class ShowTodoPage extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.section.name}</h4>
        <TodoList todos={this.props.section.todos} />
        <form>
          <input ref="todo-item-name" />
          <button>Add new item</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  //passing todo reducer and section's id
  return { section: getSectionById(state.todo, props.match.params.id) };
}

export default connect(mapStateToProps)(ShowTodoPage);