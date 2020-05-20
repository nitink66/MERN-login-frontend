import React, { Component } from 'react'
import Container from '@material-ui/core/Container';

import NavBar from './Components/NavBar'
import LoginComponent from './Components/LoginComponent'
import Landing from './Components/Landing'
import Register from './Components/Register'
import Profile from './Components/Profile'

import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar />
        <Container maxWidth="sm">
          <Route exact path="/" component={Landing} />
        </Container>

          <Route exact path="/signin" component={LoginComponent} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
      </div>
      </Router>
    )
  }
}
export default App