import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default Produtos;
