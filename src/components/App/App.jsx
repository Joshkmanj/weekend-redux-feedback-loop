import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'




// Importing the client side routes
import Home from '../Pages/Home'
import Morale from '../Pages/Morale'
import Understanding from '../Pages/Understanding'
import Support from '../Pages/Support'
import Comments from '../Pages/Comments'
import Review from '../Pages/Review'
import Confirmation from '../Pages/Confirmation'

function App() {

  const dispatch = useDispatch();

  const submitHandler = (payload, dispatchType) => {
    console.log('Page submitted with data:', payload);
    if (payload === '' && dispatchType !== 'SET_COMMENT' ){
        alert('Use the slider to pick a rating!')
        return false;
    }
    dispatch({
        type: dispatchType,
        payload: payload
    })
    return true;
}

  return (

    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
          {/* <button onClick={testFunction}>Next</button> */}
        </header>
      <Route path='/' exact>
        <Home  />
      </Route>
      <Route path='/morale' exact>
        <Morale 
        submitHandler={submitHandler} 
        />
      </Route>
      <Route path='/understanding' exact>
        <Understanding  
        submitHandler={submitHandler} 
        />
      </Route>
      <Route path='/support' exact>
        <Support  
          submitHandler={submitHandler} 
        />
      </Route>
      <Route path='/comments' exact>
        <Comments  
          submitHandler={submitHandler} 
        />
      </Route>
      <Route path='/review' exact>
        <Review  />
      </Route>
      <Route path='/confirmation' exact>
        <Confirmation />
      </Route>
      </div>
    </Router>
  );
}

export default App;
