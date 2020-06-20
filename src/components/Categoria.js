import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <form action="#">
        <p>
          <input type="checkbox" id="test" />
          <label htmlFor="test">Red</label>
        </p>
        <p>
          <input type="checkbox" id="test1" />
          <label htmlFor="test1">Red</label>
        </p>
        <p>
          <input type="checkbox" id="test2" />
          <label htmlFor="test2">Red</label>
        </p>
        <p>
          <input type="checkbox" id="test3" />
          <label htmlFor="test3">Red</label>
        </p>
        <p>
          <input type="checkbox" id="test4" />
          <label htmlFor="test4">Red</label>
        </p>
        <p>
          <input type="checkbox" id="test5" />
          <label htmlFor="test5">Red</label>
        </p>
      </form>
    );
  }
}

export default Category;
