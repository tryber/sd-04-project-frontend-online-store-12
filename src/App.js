import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import * as api from './services/api';
import SearchBar from './components/SearchBar';

function App() {
  api.getCategories().then((resp) => console.log(resp));
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SearchBar} />
      </Switch>
    </div>
  );
}

export default App;
