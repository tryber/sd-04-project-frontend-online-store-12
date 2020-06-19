import React, { Component } from 'react';

class Botao extends Component {
  render() {
    const { texto, onClick, queryValue } = this.props;
    return (
      <button
        onClick={() => onClick('', queryValue)}
        data-testid="query-button"
        type="submit"
      >
        {texto}
      </button>
    );
  }
}

export default Botao;
