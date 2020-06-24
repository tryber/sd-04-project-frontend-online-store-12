import React from 'react';
import { Link } from 'react-router-dom';
import SaveProd from './SaveProd';
// style temporário.
const ListItem = (props) => {
  const { prod: { id, title, thumbnail, price } } = props;
  const { prod } = props;
  const style = {
    display: 'inline-block',
    textOverflow: 'ellipsis',
    width: '250px',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
}
  return (
    <div className="col s12 m3 s3">
      <div className="card small center-align" data-testid="product">
        <p style={style}>{title}</p>
            <img className="responsive-img" src={thumbnail} alt={title} />
        <p>
          Price: R$
          {price.toFixed(2)}
        </p>
        
        <Link to={`/product/${id}`} data-testid="product-detail-link">
          Detalhes
        </Link>
        <SaveProd test="product-add-to-cart" produto={prod} />
      </div>
    </div>
  );
};

export default ListItem;
