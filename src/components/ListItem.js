import React from 'react';
import { Link } from 'react-router-dom';
import SaveProd from './SaveProd';
// style temporário.
const ListItem = (props) => {
  const { prod: { id, title, thumbnail, price } } = props;
  const { prod } = props;
  return (
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
      <SaveProd produto={prod} />
    </div>
  );
};

export default ListItem;
