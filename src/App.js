import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import PrivateRoute from './utils/PrivateRoute'

import Navigation from './components/Navigation'
import UserList from './components/user/UserList'
import Register from './components/user/Register'
import Login from './components/user/Login'

function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <PrivateRoute path='/users' component={UserList} />
        <Route path='/register' component={Register} />
        <Route path='/' component={Login} />
      </Switch>
    </Container>
  )
}

export default App
