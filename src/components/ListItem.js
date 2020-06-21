import React from 'react';

const ListItem = ({ prod: { title, thumbnail, price } }) => (
  <div data-testid="product">
    <p>{title}</p>
    <img src={thumbnail} alt={title} />
    <p>
      Price: R$
      {price.toFixed(2)}
    </p>
  </div>
);

export default ListItem;
