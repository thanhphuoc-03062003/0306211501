import React, { Component } from 'react';
import { connect } from 'react-redux';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
function action{
  return (
<>

</>
  );
}
export default action();
export const addTodo = text => ({
  type: ADD_TODO,
  text,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

// reducers.js
import { ADD_TODO, TOGGLE_TODO } from './actions';

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};