import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as api from './services/api';
import Nav from './components/Nav';
import Produtos from './components/Produtos';
import Categorias from './components/Categorias';
import Carrinho from './components/Carrinho';
import KartLInk from './components/KartLInk';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCat: '',
      prods: false,
    }; // searchTerm movido para produtos.
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(searchTerm) {
    const { selectedCat } = this.state;
    api.getProductsFromCategoryAndQuery(selectedCat, searchTerm)
      .then((prod) => this.setState({ prods: prod.results }));
  }

  handleOnChange(catId) {
    console.log('Selecioando categoria com sucesso!');
    api.getProductsFromCategoryAndQuery(catId, '')
      .then((prod) => {
        this.setState({ selectedCat: catId, prods: prod.results });
      });
  }

  render() {
    const { selectedCat, prods } = this.state;
    console.log(selectedCat, prods);
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
                <Produtos myCategorie={selectedCat} produtos={prods} click={this.handleClick} />
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
