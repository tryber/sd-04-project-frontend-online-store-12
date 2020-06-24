import React, { Component } from 'react';
// import { render } from '@testing-library/react';

const atualizaItem = (carrinho, newProd) => {
  const noCarrinho = carrinho;
  const existente = noCarrinho.find((item) => item.id === newProd.id);
  const position = noCarrinho.indexOf(existente);
  noCarrinho[position].quantidade += 1;
  localStorage.shoppingKart = JSON.stringify(noCarrinho);
};

const addItem = (carrinho, newProd) => {
  const noCarrinho = carrinho;
  const newItems = [...noCarrinho, newProd];
  localStorage.shoppingKart = JSON.stringify(newItems);
};

class SaveProd extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(prod) {
    const newProd = prod; // Evitando atribuição de parâmetros.
    if (Storage) {
      if (!localStorage.shoppingKart) localStorage.shoppingKart = JSON.stringify([]);
      newProd.quantidade = 1;
      const noCarrinho = JSON.parse(localStorage.shoppingKart);
      const existe = noCarrinho.some((item) => item.id === newProd.id);
      if (existe) {
        atualizaItem(noCarrinho, newProd);
      } else {
        addItem(noCarrinho, newProd);
      }
    }
  }

  render() {
    const { produto, test } = this.props;
    return (
      <div>
        <button
          data-testid={test}
          type="button"
          onClick={() => this.addToCart(produto)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default SaveProd;
