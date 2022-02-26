// Importing the React frameworks
import React from 'react';
import ReactDOM from 'react-dom';

// Files/pages to import
import './index.css';
import App from './components/App/App';

// tools to import
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedbackData = (state = [], action) => {

if (action.type === 'TYPE') {
return [...state, action.payload];
}
// If action.type is anything else, it'll just return the last value of state.
return state;
}



const storeData = createStore(
    combineReducers({
      feedbackData
    }),
    applyMiddleware(logger)
)


ReactDOM.render(
    <Provider store={storeData}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
