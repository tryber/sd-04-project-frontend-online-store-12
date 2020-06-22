import React from 'react';
import { Link } from 'react-router-dom';
// style temporário.
const ListItem = ({ prod: { id, title, thumbnail, price } }) => (
  <div data-testid="product" style={{ border: '1px solid black' }}>
    <p>{title}</p>
    <img src={thumbnail} alt={title} />
    <p>
      Price: R$
      {price.toFixed(2)}
    </p>
    <Link to={`/product/${id}`} data-testid="product-detail-link">
      Ver Detalhes
    </Link>
  </div>
);

export default ListItem;
