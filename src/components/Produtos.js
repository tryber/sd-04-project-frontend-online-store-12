import React, { Component } from 'react';
import * as api from '../services/api';
import ListItem from './ListItem';

class Produtos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      categoria: '',
      produtos: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleClick() {
    const { searchTerm, categoria } = this.state;
    api.getProductsFromCategoryAndQuery(categoria, searchTerm)
      .then((prod) => this.setState({ produtos: prod.results }));
  }

  render() {
    const { searchTerm, produtos } = this.state;
    console.log(produtos);
    return (
      <div className="col s8">
        <div className="input-field">
          <input
            data-testid="query-input"
            placeholder="Search products"
            type="text"
            className="validate"
            value={searchTerm}
            onChange={this.handleInput}
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={this.handleClick}
          >
            Buscar
          </button>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div>
            {produtos && produtos.map((item) => <ListItem key={item.id} prod={item} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Produtos;
