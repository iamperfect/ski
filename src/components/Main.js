import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';
import InwardReport from './inward/inwardReport';
const Main = () => (
  <main className="container">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/inwardreport' component={InwardReport}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)

export default Main
