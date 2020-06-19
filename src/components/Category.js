import React, { Component, Fragment } from 'react';

class Category extends Component {
  render() {
    const { category } = this.props;
    return (
      <Fragment>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={category}
          />
          <label
            className="custom-control-label"
            htmlFor={category}
          >
            {category}
          </label>
        </div>
      </Fragment>
    );
  }
}

export default Category;
