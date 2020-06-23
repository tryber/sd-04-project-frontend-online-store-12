import React from 'react';

const SaveProd = (props) => {
  const { produto, test } = props;

  const addToCart = (prod) => {
    if (Storage) {
      if (!localStorage.shoppingKart) localStorage.shoppingKart = JSON.stringify([]);
      prod.quantidade = 1;
      const noCarrinho = JSON.parse(localStorage.shoppingKart);
      const existe = noCarrinho.some((item) => item.id === prod.id);

      console.log('São igual?', existe); // Implemntar o increment de quantidade.
      if (existe) {
        const existente = noCarrinho.find((item) => item.id === prod.id);
        const position = noCarrinho.indexOf(existente);
        noCarrinho[position].quantidade += 1;
        localStorage.shoppingKart = JSON.stringify(noCarrinho);
      } else {
        const newItems = [...noCarrinho, prod];
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
