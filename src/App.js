import React from 'react';
import Nav from './components/Nav';
import Produtos from './components/Produtos';
import Categoria from './components/Categoria';

function App() {
  return (
    <div>
      <Nav />
      <div className="container row" style={{ paddingTop: 30, paddingBottom: 30 }}>
        <div className="col s4">
          <Categoria />
        </div>
        <div className="col s8">
          <Produtos />
        </div>
      </div>
    </div>
  );
}

export default App;
