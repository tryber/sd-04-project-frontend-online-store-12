import React, { Component } from 'react';
import getItemById from '../services/apiById';
import KartLInk from './KartLInk';

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
          <KartLInk link="/" />
          <div>
            <h1 data-testid="product-detail-name">{prod.title}</h1>
          </div>
        </div>
      );
    }
    return <div>Carregando....</div>;
  }
}

export default ProdDetails;
