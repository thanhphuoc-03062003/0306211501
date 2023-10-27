import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions';
import index from './index';

class App extends Component {
  state = {
    newTodo: '',
  };

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    const { newTodo } = this.state;
    if (newTodo) {
      this.props.addTodo(newTodo);
      this.setState({ newTodo: '' });
    }
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add a new todo"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add</button>
        <ul>
          {this.props.todos.map(todo => (
            <li
              key={todo.id}
              onClick={() => this.props.toggleTodo(todo.id)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);