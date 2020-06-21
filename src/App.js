import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Produtos from './components/Produtos';
import Categorias from './components/Categorias';
import Carrinho from './components/Carrinho';
import KartLInk from './components/KartLInk';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <div className="row" style={{ paddingTop: 30, paddingBottom: 30 }}>
          <div className="col s3">
            <form action="#">
              <Categorias />
            </form>
          </div>
          <Switch>
            <Route exact path="/">
              <div className="col s7">
                <Produtos />
              </div>
            </Route>
            <Route exact path="/carrinho">
              <div className="col s8">
                <Carrinho />
              </div>
            </Route>
          </Switch>
          <div className="col s2">
            <KartLInk link="/carrinho" />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
