import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  api.getCategories()
    .then((resp) => console.log(resp));
  return (
    <div className="App">
      <h1>Hello Project</h1>
    </div>
  );
}

export default App;
