import React from 'react';
import { Link } from 'react-router-dom';
import SaveProd from './SaveProd';
// style temporário.
const ListItem = (props) => {
  const { prod: { id, title, thumbnail, price } } = props;
  const { prod } = props;
  return (
       <div className="col s12 m3 s3">
         <div className="card small center-align" data-testid="product">
           <h6 className="center-align flow-tex">{title}</h6>
               <img src={thumbnail} alt={title} />
            <p>
              Price: R$
              {price.toFixed(2)}
            </p>
            <Link to={`/product/${id}`} data-testid="product-detail-link">
              Ver Detalhes
            </Link>
            <div className="card-action">
              <SaveProd test="product-add-to-cart" produto={prod} />
            </div>
        </div>
      </div>
  );
};

export default ListItem;
