import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from "./Pages/About";
import Locate from "./Pages/Locate/Locate";

function App() {
  return (
    <div> 
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Locate' component={Locate}/>
      </Switch>
    </div>
  );
}

export default App;
