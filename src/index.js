import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './main.css';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
// import { connect } from 'react-redux'
//function logger(obj,next,action)

// 1st way
// const logger = function ({dispatch,getState}){
//   return function(next){
//     return function(action){
//       //middleware code
//       console.log('ACTION.TYPE =', action.type);
//       next(action);
//     }
//   }

// }

// 2nd way
const logger = ({dispatch,getState})=> (next)=> (action)=>{
  // console.log('ACTION.TYPE =', action.type);
      next(action);

}


const store = createStore(rootReducer,applyMiddleware(logger));
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


