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
      value: 5,
      comment: '',
    },
    understanding: {
      value: 5,
      comment: '',
    },
    supported: {
      value: 5,
      comment: '',
    },
    comments: '',
  }, action) => {
    if(action.type === 'SET_FEELINGS'){
        return { ...state,
          feelings: {
            ...state.feelings,
            comment: action.payload,
          },
        };
    }
    if(action.type === 'SET_UNDERSTANDING'){
      return { ...state,
        understanding: {
          ...state.understanding,
          comment: action.payload,
        },
      };
  }
    if(action.type === 'SET_SUPPORT'){
      return { ...state,
        supported: {
          ...state.supported,
          comment: action.payload,
        },
      };
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
