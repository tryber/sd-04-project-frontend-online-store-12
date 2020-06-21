import React, { Component } from 'react';

class Produtos extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div className="col s8">
        <div className="input-field">
          <input
            data-testid="query-input"
            placeholder="Search movie"
            id="first_name2"
            type="text"
            className="validate"
            onChange={handleChange}
          />
          <button data-testid="query-button" type="button">Buscar</button>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </div>
    );
  }
}

export default Produtos;
