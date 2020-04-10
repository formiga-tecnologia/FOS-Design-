import React,{useState} from 'react';
import './Css/mainRules.css'
import ExploreBar from './components/Explorebar'
import Favappbox from './components/Favappbox'
import StandartApp from './components/apps/StandartApp'
import { Switch, Route} from 'react-router-dom';
import Terminal from './components/apps/Terminal'


function App() {  
  const [setApi,Api]=useState()
  function set_api(){
    setApi(
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => Api)
    )
    return Api
  }
  console.log(set_api)
  return (
    <>
    <ExploreBar></ExploreBar>
    <Switch>
      <Route path='/terminal' component={Terminal}></Route>
      <Route path='/favApp' component={Favappbox}></Route>
      <Route path='/appBase' component={StandartApp}></Route>
    </Switch>
    </> 
  );
}

export default App;
