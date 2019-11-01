import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const feedback = (
  state = {
    feelings: '',
    understanding: '',
    supported: '',
    comments: '',
  }, action) => {
    if(action.type === 'SET_FEELINGS'){
        return {...state, feelings: action.payload};
    }
    if(action.type === 'SET_UNDERSTANDING'){
      return {...state, understanding: action.payload};
    }
    if(action.type === 'SET_SUPPORT'){
      return {...state, supported: action.payload};
    }
    if(action.type === 'SET_COMMENT'){
      return {...state, comments: action.payload};
    }
    
    return state;
}

const reduxStore = createStore(
    combineReducers({
      feedback,
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
