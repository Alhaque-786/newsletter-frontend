// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Subscribe from './components/subscribe';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Subscribe} />
          <Route path="/payment/:orderId/:userId/:userName/:userEmail" component={Payment} />
          {/* Add other routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
