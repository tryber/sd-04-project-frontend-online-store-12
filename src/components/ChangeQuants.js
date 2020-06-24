import React, { Component } from 'react';

class ChangeQuants extends Component {
  constructor(props) {
    super(props);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  increaseQuantity(produto) {
    const { items, setKart } = this.props;
    const alvo = produto;
    const pos = items.indexOf(alvo);
    items[pos].quantidade += 1;
    setKart(items);
  }

  decreaseQuantity(produto) {
    const { items, setKart } = this.props;
    const alvo = produto;
    const pos = items.indexOf(alvo);
    items[pos].quantidade -= 1;
    setKart(items);
  }

  render() {
    const { prod } = this.props;
    console.log(this.props);
    return (
      <div>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={() => this.increaseQuantity(prod)}
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={() => this.decreaseQuantity(prod)}
        >
          -
        </button>
      </div>
    );
  }
}

export default ChangeQuants;
