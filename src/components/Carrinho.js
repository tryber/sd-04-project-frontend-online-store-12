import React, { Component } from 'react';
import KartLInk from './KartLInk';

class Carrinho extends Component {
  constructor(props) {
    super(props);
    this.state = { seusItems: [] };
    this.kartVerify = this.kartVerify.bind(this);
  }

  componentDidMount() {
    this.setMyKart();
  }

  setMyKart() {
    if (localStorage.shoppingKart) {
      this.setState({ seusItems: JSON.parse(localStorage.shoppingKart) });
    }
  }

  countItem(identity) {
    const { seusItems } = this.state;
    const quantity = seusItems.filter((item) => item.id === identity).length;
    return quantity;
  }

  kartVerify() {
    const { seusItems } = this.state;
    return (seusItems.length === 0)
      ? (
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      )
      : (
        seusItems.map((item) => (
          <div key={item.title}>
            <span
              data-testid="shopping-cart-product-name"
            >
              {item.title}
            </span>
            <span
              data-testid="shopping-cart-product-quantity"
            >
              {this.countItem(item.id)}
            </span>
          </div>
        ))
      );
  }

  render() {
    return (
      <div className="col s8">
        <div>
          <KartLInk link="/" />
          {this.kartVerify()}
        </div>
      </div>
    );
  }
}

export default Carrinho;
