import React, { Component } from 'react';

class ChangeQuants extends Component {
  render() {
    return (
      <div>
        <button data-testid="product-increase-quantity">+</button>
        <button data-testid="product-decrease-quantity">-</button>
      </div>
    );
  }
}

export default ChangeQuants;
