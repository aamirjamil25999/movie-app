import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './main.css';
import { legacy_createStore as createStore } from 'redux';
import movies from './reducers';
// import { connect } from 'react-redux'

const store = createStore(movies);
// console.log('beforestate', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }]
// });
// console.log('afterstate', store.getState());

// console.log(store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store ={ store } />
  </React.StrictMode>
);


