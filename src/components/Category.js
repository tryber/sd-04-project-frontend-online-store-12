import React, { Component, Fragment } from 'react';

class Category extends Component {
  render() {
    return (
      <Fragment>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={this.props.category}
          />
          <label
            className="custom-control-label"
            htmlFor={this.props.category}
          >
            {this.props.category}
          </label>
        </div>
      </Fragment>
    );
  }
}

export default Category;
