import React from 'react';
import './App.css';
import * as api from './services/api';
import SearchBar from './components/SearchBar'
function App() {
  api.getCategories()
    .then((resp) => console.log(resp));
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
