import React, { Component } from 'react';

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

const verificaExistencia = (prod) => {
  const newProd = prod; // Evitando atribuição de parâmetros.
  newProd.quantidade = 1;
  const noCarrinho = JSON.parse(localStorage.shoppingKart);
  return noCarrinho.some((item) => item.id === newProd.id);
};

const addToCart = (prod) => {
  const newProd = prod; // Evitando atribuição de parâmetros.
  if (!localStorage.shoppingKart) localStorage.shoppingKart = JSON.stringify([]);
  const noCarrinho = JSON.parse(localStorage.shoppingKart);
  if (verificaExistencia(prod)) {
    atualizaItem(noCarrinho, newProd);
  } else {
    addItem(noCarrinho, newProd);
  }
};

class SaveProd extends Component {
  render() {
    const { produto, test } = this.props;
    return (
      <div>
        <button
          data-testid={test}
          type="button"
          onClick={() => addToCart(produto)}
          className="btn waves-effect waves-light"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default SaveProd;
