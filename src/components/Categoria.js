import React from 'react';

const Categoria = ({ sku, nome }) => (
  <div className="container row">
    <label htmlFor={sku}>
      <input
        data-testid="category"
        className="form-check-input"
        type="radio"
        value={nome}
        id={sku}
      />
      {nome}
    </label>
  </div>
);


export default Categoria;
