import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Profile} path="/profile" exact />
      <Route component={() => <h1>Page not found</h1>} />
    </Switch>
  )
}

export default Routes