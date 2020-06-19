import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { test, nomeClasse, tipo, valor, onChange } = this.props;
    return (
      <div>
        <input
          className={nomeClasse}
          data-testid={test}
          type={tipo}
          value={valor}
          onChange={() => onChange()}
        />
      </div>
    );
  }
}

export default Input;
