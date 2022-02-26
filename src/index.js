// Importing the React frameworks
import React from 'react';
import ReactDOM from 'react-dom';

// Files/pages to import
import './index.css';
import App from './components/App/App';

// tools to import
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import logger from 'redux-logger';



ReactDOM.render(
    <Provider>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
