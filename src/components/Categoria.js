import React from 'react';

const Categoria = ({ sku, nome }) => (
  <p>
    <label>
      <input name="group1" id={sku} type="radio" />
      <span>{nome}</span>
    </label>
 </p>
);

export default Categoria;
