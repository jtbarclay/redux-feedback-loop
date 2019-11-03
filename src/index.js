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
    feelings: {
      value: '',
      comment: '',
    },
    understanding: {
      value: '',
      comment: '',
    },
    supported: {
      value: '',
      comment: '',
    },
    comments: '',
  }, action) => {
  if (action.type === 'SET_FEELINGS') {
    return {
      ...state,
      feelings: {
        ...state.feelings,
        comment: action.payload,
      },
    };
  }
  if (action.type === 'SET_FEELINGS_VALUE') {
    return {
      ...state,
      feelings: {
        ...state.feelings,
        value: action.payload,
      }
    }
  }
  if (action.type === 'SET_UNDERSTANDING') {
    return {
      ...state,
      understanding: {
        ...state.understanding,
        comment: action.payload,
      },
    };
  }
  if (action.type === 'SET_UNDERSTANDING_VALUE') {
    return {
      ...state,
      understanding: {
        ...state.understanding,
        value: action.payload,
      }
    }
  }
  if (action.type === 'SET_SUPPORT') {
    return {
      ...state,
      supported: {
        ...state.supported,
        comment: action.payload,
      },
    };
  }
  if (action.type === 'SET_SUPPORTED_VALUE') {
    return {
      ...state,
      supported: {
        ...state.supported,
        value: action.payload,
      }
    }
  }
  if (action.type === 'SET_COMMENT') {
    return { ...state, comments: action.payload };
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
