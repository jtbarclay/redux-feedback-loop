import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';
import './App.css';

//import routes
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>

          {/* Temp nav links */}
          <Link to='/'>Home</Link>
          <Link to='/feeling'>Feeling</Link>
          <Link to='/understanding'>Understanding</Link>
          <Link to='/supported'>Supported</Link>
          <Link to='/comments'>Comments</Link>
          <Link to='/review'>Review</Link>
          <br />
          <Route
            path="/"
            component={Home}
            exact
          />
          <Route
            path="/feeling"
            component={Feeling}
          />
          <Route
            path="/understanding"
            component={Understanding}
          />
          <Route
            path="/supported"
            component={Supported}
          />
          <Route
            path="/comments"
            component={Comments}
          />
          <Route
            path="/review"
            component={Review}
          />

        </div>
      </Router>
    );
  }
}

export default App;
