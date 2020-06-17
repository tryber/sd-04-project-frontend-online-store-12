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
      </div>
    );
  }
}

export default Carrinho;
