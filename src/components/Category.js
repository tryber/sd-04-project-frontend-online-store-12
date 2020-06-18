import React, { Component, Fragment } from 'react';

class Category extends Component {
  render() {
    return (
      <Fragment>
        <h4>Categorias:</h4>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="defaultUnchecked"
          />
          <label className="custom-control-label"
                 htmlFor="defaultUnchecked"
          >
                 Default unchecked
          </label>
        </div>
      </Fragment>
    );
  }
}

export default Category;
