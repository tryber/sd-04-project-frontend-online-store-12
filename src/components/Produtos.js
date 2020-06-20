import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import KartLInk from './KartLInk';

class Produtos extends Component {
  render() {
    return (
      <div className="input-field">
        <input
          placeholder="Search movie"
          id="first_name2"
          type="text"
          className="validate"
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Router>
          <KartLInk link="/carrinho" />
        </Router>
      </div>
    );
  }
}

export default Produtos;
