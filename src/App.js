import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  api.getCategories()
    .then((resp) => console.log(resp));
  return (
    <div className="App">
    </div>
  );
}

export default App;
