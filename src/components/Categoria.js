import React from 'react';

const Categoria = ({ sku, nome }) => (
  <p>
    <label htmlFor={sku}>
      <input name="group1" id={sku} type="radio" />
      <span>{nome}</span>
    </label>
  </p>
);

export default Categoria;
