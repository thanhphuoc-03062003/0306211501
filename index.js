import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { todoReducer } from './reducers';
import React, { Component } from 'react';
import { connect } from 'react-redux';
function index() {
return(<>
const store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
</>);
}
export default index();
