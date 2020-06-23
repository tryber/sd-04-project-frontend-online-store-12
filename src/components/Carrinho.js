import React, { Component } from 'react';
import KartLInk from './KartLInk';
import ChangeQuants from './ChangeQuants';

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

  countItem(identity) { // função depreciada.
    const { seusItems } = this.state;
    const quantity = seusItems.filter((item) => item.id === identity).length;
    return quantity; // Excluir essa função.
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
          <div key={item.title} style={{ border: '1px solid black', padding: '10px' }}>
            <div
              data-testid="shopping-cart-product-name"
            >
              {item.title}
            </div>
            <div
              data-testid="shopping-cart-product-quantity"
            >
              Quantidade: {item.quantidade}
            </div>
            <div>
              <ChangeQuants />
            </div>
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
