import React from 'react';

const Categoria = ({ sku, nome, onChange }) => (
  <p>
    <label htmlFor={sku}>
      <input
        data-testid="category"
        name="group1"
        id={sku}
        type="radio"
        onChange={(e) => onChange(e.target.id)}
      />
      <span>{nome}</span>
    </label>
  </p>
);

export default Categoria;
