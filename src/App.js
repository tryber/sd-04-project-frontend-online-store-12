import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as api from './services/api';
import './App.css';

function App() {
  api.getCategories().then((response) => console.log(response));
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" />
      </Switch>
    </div>
  );
}

export default App;
