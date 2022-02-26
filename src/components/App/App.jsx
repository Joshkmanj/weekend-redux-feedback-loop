import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';


// Importing the client side routes
import Home from '../Pages/Home'
import Feeling from '../Pages/Feeling'
import Understanding from '../Pages/Understanding'
import Support from '../Pages/Support'
import Comments from '../Pages/Comments'
import Review from '../Pages/Review'

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      <Route path='/' exact>
        <Home  />
      </Route>
      <Route path='/Feeling' exact>
        <Feeling  />
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
