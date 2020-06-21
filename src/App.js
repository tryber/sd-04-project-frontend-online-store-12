import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Produtos from './components/Produtos';
import Categorias from './components/Categorias';
import Carrinho from './components/Carrinho';
import KartLInk from './components/KartLInk';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategorie: '' }; // searchTerm movido para produtos.
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(catId) {
    console.log('Selecioando categoria com sucesso!');
    this.setState({ selectedCategorie: catId });
  }

  render() {
    const { selectedCategorie } = this.state;
    console.log(selectedCategorie);
    return (
      <div>
        <Router>
          <Nav />
          <div className="row" style={{ paddingTop: 30, paddingBottom: 30 }}>
            <div className="col s3">
              <form action="#">
                <Categorias onChange={this.handleOnChange} />
              </form>
            </div>
            <Switch>
              <Route exact path="/">
                <Produtos selectedCat={selectedCategorie} />
              </Route>
              <Route exact path="/carrinho">
                <Carrinho />
              </Route>
            </Switch>
            <KartLInk link="/carrinho" />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
