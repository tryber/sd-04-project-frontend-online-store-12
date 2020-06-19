import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { test, classe, tipo, valor, onChange } = this.props;
    return (
      <div>
        <input
          className={classe}
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
