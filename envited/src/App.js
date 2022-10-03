import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

//components
import Landing from './components/Landing';
import Event from './components/Event';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <div className="App">


      <Switch>
        <Route exact path ="/" component={Landing}/>
        <Route exact path ="/create" component={Event}/>
        <Route exact path ="/event" component={EventDetails}/>
      </Switch>



    </div>
  );
}

export default App;
