import React, { Component } from 'react';
import getItemById from '../services/apiById';
import KartLInk from './KartLInk';
import SaveProd from './SaveProd';

class ProdDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { prod: false };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getItemById(id)
      .then((resposta) => this.setState({ prod: resposta }));
  }

  render() {
    const { prod } = this.state;
    if (prod) {
      return (
        <div>
          <KartLInk link="/carrinho" />
          <div>
            <h4 data-testid="product-detail-name">{prod.title}</h4>
            <SaveProd test="product-detail-add-to-cart" produto={prod} />
          </div>
        </div>
      );
    }
    return <div>Carregando....</div>;
  }
}

export default ProdDetails;
