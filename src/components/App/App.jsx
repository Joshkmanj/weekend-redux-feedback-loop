import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'




// Importing the client side routes
import Home from '../Pages/Home'
import Feeling from '../Pages/Feeling'
import Understanding from '../Pages/Understanding'
import Support from '../Pages/Support'
import Comments from '../Pages/Comments'
import Review from '../Pages/Review'

function App() {

  const dispatch = useDispatch();
  const history = useHistory();

  // const testFunction = ()=>{
  //   event.preventDefault
  //   console.log('test function');
  //   history.push('/Understanding')
  // }

  const submitHandler = (payload, dispatchType) => {
    console.log('Page submitted with data:', payload);
    if (payload === ''){
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
      <Route path='/Feeling' exact>
        <Feeling 
        submitHandler={submitHandler} 
        />
      </Route>
      <Route path='/Understanding' exact>
        <Understanding  />
      </Route>
      <Route path='/Support' exact>
        <Support  />
      </Route>
      <Route path='/Comments' exact>
        <Comments  />
      </Route>
      <Route path='/Review' exact>
        <Review  />
      </Route>
      </div>
    </Router>
  );
}

export default App;
