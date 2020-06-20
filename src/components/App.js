import React from 'react';
import Nav from './Nav';
import Produtos from './Produtos';
import Categoria from './Categoria';

function App() {
  return (
    <div>
      <Nav />
      <div className="container row" style={{ paddingTop: 30, paddingBottom: 30 }}>
        <div className="col s4">
          <Categoria/>
        </div>
        <div className="col s8">
          <Produtos/>
        </div>
      </div>
    </div>
  );
}

export default App;
