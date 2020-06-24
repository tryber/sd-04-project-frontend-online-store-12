import React from 'react';

const SaveProd = (props) => {
  const { produto, test } = props;

  const atualizaItem = (carrinho, newProd) => {
    const noCarrinho = carrinho;
    const existente = noCarrinho.find((item) => item.id === newProd.id);
    const position = noCarrinho.indexOf(existente);
    noCarrinho[position].quantidade += 1;
    localStorage.shoppingKart = JSON.stringify(noCarrinho);
  };

  const addToCart = (prod) => {
    const newProd = prod; // Evitando atribuição de parâmetros.
    if (Storage) {
      if (!localStorage.shoppingKart) localStorage.shoppingKart = JSON.stringify([]);
      newProd.quantidade = 1;
      const noCarrinho = JSON.parse(localStorage.shoppingKart);
      const existe = noCarrinho.some((item) => item.id === newProd.id);

      if (existe) {
        atualizaItem(noCarrinho, newProd);
      } else {
        const newItems = [...noCarrinho, newProd];
        localStorage.shoppingKart = JSON.stringify(newItems);
      }
    }
  };

  return (
    <div>
      <button
        data-testid={test}
        type="button"
        onClick={() => addToCart(produto)}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default SaveProd;
