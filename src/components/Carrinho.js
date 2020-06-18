import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

class Carrinho extends Component {
  render() {
    return (
      <div>
        <Link to="/">Voltar</Link>
        <div>
          <CartIcon />
          Carrinho de Compras
        </div>
        <p data-testid="shopping-cart-empty-message" className="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      </div>
    );
  }
}

export default Carrinho;
