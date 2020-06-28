import React, { Component } from 'react';
import getItemById from '../services/apiById';
import KartLInk from './KartLInk';
import SaveProd from './SaveProd';

class ProdDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prod: false,
      avaliacao: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getItemById(id)
      .then((resposta) => this.setState({ prod: resposta }));
  }

  changeAvMensagem(txt) {
    this.setState({ avaliacao: txt });
  }

  formAvaliacao() {
    const { avaliacao } = this.state;
    return (
      <form action="#">
        <fieldset>
          <legend>Avaliações</legend>
          <textarea
            cols="20"
            rows="10"
            placeholder="Mensagem (opcional)"
            data-testid="product-detail-evaluation"
            value={avaliacao}
            onChange={(e) => this.changeAvMensagem(e.target.value)}
          />
        </fieldset>
      </form>
    );
  }

  render() {
    const { prod } = this.state;
    if (prod) {
      return (
        <div>
          <KartLInk link="/carrinho" />
          <div>
            <h3 data-testid="product-detail-name">{prod.title}</h3>
            <img src={prod.thumbnail} alt={prod.title} />
            <p>{`Preço: R$ ${(prod.price).toFixed(2)}`}</p>
            <p>{prod.warranty}</p>
            <SaveProd test="product-detail-add-to-cart" produto={prod} />
            {this.formAvaliacao()}
          </div>
        </div>
      );
    }
    return <div>Carregando....</div>;
  }
}

export default ProdDetails;
