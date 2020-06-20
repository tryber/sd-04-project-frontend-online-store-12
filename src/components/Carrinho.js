import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import KartLInk from './KartLInk';

class Carrinho extends Component {
  render() {
    return (
      <div>
        {/* <Router> */}
        <KartLInk link="/" />
        {/* </Router> */}
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}

export default Carrinho;
