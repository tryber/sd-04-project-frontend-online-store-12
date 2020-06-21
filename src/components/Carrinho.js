import React, { Component } from 'react';
import KartLInk from './KartLInk';

class Carrinho extends Component {
  render() {
    return (
      <div className="col s8">
        <div>
          <KartLInk link="/" />
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>
      </div>
    );
  }
}

export default Carrinho;
