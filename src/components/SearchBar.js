import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import Category from './Category';
import Botao from './Botao';
import * as api from '../services/api';
import Input from './Input';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      category: [],
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((resp) => this.setState({ category: [resp] }));
  }

  handleInput(e) {
    this.setState({ query: e.target.value });
  }

  render() {
    const { query, category } = this.state;
    return (
      <div className="container">
        <div className="alert alert-primary" role="alert">
          <h3>sd-04-project-frontend-online-store-12</h3>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <h4>Categorias:</h4>
            {category.length !== 0
              ? category[0].map((e) => <Category key={e.id} category={e.name} />)
              : null}
          </div>
          <div className="col-sm-8">
            <Input test="query-input" nomeClasse="form-control" tipo="text" valor={query} onChange={this.handleInput} />
            <Botao texto="Buscar" onClick={api.getProductsFromCategoryAndQuery} queryValue={query} />
            <p data-testid="home-initial-message" className="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </div>
          <div className="col-sm-2">
            <Link to="/carrinho"><CartIcon /></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
