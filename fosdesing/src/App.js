import React from 'react';
import './Css/mainRules.css'
import ExploreBar from './components/Explorebar'
import Favappbox from './components/Favappbox'
import Terminal from './components/apps/Terminal'

function App() {
  return (
    <>
    <ExploreBar></ExploreBar>
    <Favappbox></Favappbox>
    <Terminal></Terminal>
    </>
  );
}

export default App;
