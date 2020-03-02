import React from 'react';
import './Css/mainRules.css'
import ExploreBar from './components/Explorebar'
import Favappbox from './components/Favappbox'
import { Switch, Route } from 'react-router-dom';
import Terminal from './components/apps/Terminal'

function App() {
  return (
    <>
    <ExploreBar></ExploreBar>
    <Switch>
      <Route path='/terminal' component={Terminal}></Route>
      <Route path='/favApp' component={Favappbox}></Route>
    </Switch>
    </> 
  );
}

export default App;
