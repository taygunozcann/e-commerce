import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'

function App() {

  return (
    <Router>
      <div>

      
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App