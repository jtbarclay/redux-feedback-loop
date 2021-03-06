import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';
import './App.css';

//import material-ui
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import cyan from '@material-ui/core/colors/cyan';
import red from '@material-ui/core/colors/red';
import { Card, CardContent } from '@material-ui/core/';
import { Box, Container } from '@material-ui/core/';

//import routes
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';
import Admin from '../Admin/Admin';
import Success from '../Success/Success';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: cyan,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  overrides: {
    MuiButton: {
      root: {
        margin: "20px",
      },
    },
    MuiCard: {
      root: {
        minWidth: 600,
      }
    }
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>Don't forget it!</i></h4>
            </header>

            {/* Temp nav links */}
            {/* <Link to='/'>Home</Link>
          <Link to='/feeling'>Feeling</Link>
          <Link to='/understanding'>Understanding</Link>
          <Link to='/supported'>Supported</Link>
          <Link to='/comments'>Comments</Link>
          <Link to='/review'>Review</Link>
          <br /> */}

            <Box
              width="50%"
              mx="auto"
              m={4}
            >
              <Card>
                <CardContent>
                {/* <Container
                  minWidth='sm'
                > */}
                  <Route
                    path="/"
                    component={Feeling}
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
                  <Route
                    path="/success"
                    component={Success}
                  />
                  <Route
                    path="/admin"
                    component={Admin}
                  />
                  {/* </Container> */}
                </CardContent>
              </Card>
            </Box>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
