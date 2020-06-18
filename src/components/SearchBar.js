import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import Category from './Category';
import getCategories from '../services/api';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { category: [] };
  }

  componentDidMount (){
    getCategories().then((resp) => this.setState({ category: [resp] }));
  };

  render() {
    return (
      <div className="container">
        <div className="alert alert-primary" role="alert">
          sd-04-project-frontend-online-store-12
        </div>
        <div className="row">
          <div className="col-sm-2">
            <h4>Categorias:</h4>
            {this.state.category.length !== 0 ?
              this.state.category[0].map((e) => <Category key={e.id} category={e.name} />) :
              null
            }
          </div>
          <div className="col-sm-8">
            <input className="form-control" type="text" />
            <p data-testid="home-initial-message" className="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </div>
          <div className="col-sm-2">
            <Link to="/carrinho">
              <CartIcon />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
