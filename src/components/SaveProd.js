import React from 'react';

const SaveProd = (props) => {
  const { produto, test } = props;

  const addToCart = (prod) => {
    if (Storage) {
      if (!localStorage.shoppingKart) localStorage.shoppingKart = JSON.stringify([]);
      const shoppingKart = JSON.parse(localStorage.shoppingKart);
      const newItems = [...shoppingKart, prod];
      localStorage.shoppingKart = JSON.stringify(newItems);
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
