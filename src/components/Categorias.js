import React, { Component } from 'react';
import * as api from '../services/api';
import Categoria from './Categoria';

class Categorias extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: false };
  }

  componentDidMount() {
    api.getCategories().then((cats) => this.setState({ categories: cats }));
  }

  render() {
    const { categories } = this.state;
    if (categories) {
      return (
        <div>
          <fieldset>
            <h3>Categorias</h3>
            {categories.map(({ id, name }) => <Categoria key={id} sku={id} nome={name} />)}
          </fieldset>
        </div>
      );
    }
    return <div>Texto</div>;
  }
}

export default Categorias;
