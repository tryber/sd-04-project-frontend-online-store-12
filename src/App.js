import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import * as api from './services/api';
import './App.css';
import SearchBar from './components/SearchBar';
import Carrinho from './components/Carrinho';

function App() {
  // api.getCategories()
  //   .then((response) => response)
  //   .then((cat) => console.log(cat));
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SearchBar} />
          <Route exact path="/carrinho" component={Carrinho} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
