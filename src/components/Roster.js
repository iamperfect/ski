import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullRoster from './FullRoster'

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
  </Switch>
)


export default Roster
