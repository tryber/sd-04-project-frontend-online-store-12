import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import Category from './Category';
import Botao from './Botao';
import * as api from '../services/api';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    const { query } = this.state;
    return (
      <div className="container">
        <div className="alert alert-primary" role="alert">
          sd-04-project-frontend-online-store-12
        </div>
        <div className="row">
          <div className="col-sm-2">
            <Category />
          </div>
          <div className="col-sm-8">
            <input
              data-testid="query-input"
              className="form-control"
              type="text"
              value={query}
              onChange={this.handleInput}
            />
            <Botao
              texto="Buscar"
              onClick={api.getProductsFromCategoryAndQuery}
              queryValue={query}
            />
            <p data-testid="home-initial-message" className="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </div>
          <div className="col-sm-2">
            <Link to="/carrinho">
              <CartIcon />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
