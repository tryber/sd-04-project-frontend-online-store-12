import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import * as api from './services/api';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  // api.getCategories()
  //   .then((response) => response)
  //   .then((cat) => console.log(cat));
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SearchBar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
