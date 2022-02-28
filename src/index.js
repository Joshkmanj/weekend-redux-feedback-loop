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


const currentRatings = (state = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}, action) => {

    // const { feelsRating, understanding, support, comment } = action.payload; 
    // This could be used for future functionality where on the review page,
    // any and all data could be edited.

    if (action.type === 'SET_MORALE') {
        return {
            ...state,
            feeling: action.payload
        }
    } else if (action.type === 'SET_UNDERSTANDING') {
        return {
            ...state,
            understanding: action.payload
        }
    } else if (action.type === 'SET_SUPPORT') {
        return {
            ...state,
            support: action.payload
        }
    } else if (action.type === 'SET_COMMENT') {
        return {
            ...state,
            comments: action.payload
        }
    }
    return state;
}



const storeData = createStore(
    combineReducers({
        currentRatings
    }),
    applyMiddleware(logger)
)


ReactDOM.render(
    <Provider store={storeData}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();