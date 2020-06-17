import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <Link to="/carrinho">
          <CartIcon />
        </Link>
        <p data-testid="home-initial-message" className="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default SearchBar;
