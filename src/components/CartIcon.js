import React, { Component } from 'react';

class CartIcon extends Component {
  render() {
    return (
      <img
        data-testid="shopping-cart-empty-message"
        src="http://gg.gg/cart-icon"
        height="40"
        alt="Cart Icon"
      />
    );
  }
}

export default CartIcon;
