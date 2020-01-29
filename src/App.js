import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import Navigation from './components/Navigation'
import UserList from './components/user/UserList'
import Register from './components/user/Register'
import Login from './components/user/Login'

function App() {
  return (
    <Container>
      <Navigation />
      <Switch>
        <Route path='/users' render={() => <UserList />} />
        <Route path='/register' render={() => <Register />} />
        <Route path='/' render={() => <Login />} />
      </Switch>
    </Container>
  )
}

export default App
