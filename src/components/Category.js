import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (
      <>
        <h4>Categorias:</h4>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
          <label className="custom-control-label" for="defaultUnchecked">Default unchecked</label>
        </div>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="defaultUnchecked2"/>
          <label className="custom-control-label" for="defaultUnchecked2">Default unchecked</label>
        </div>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="defaultUnchecked3"/>
          <label className="custom-control-label" for="defaultUnchecked3">Default unchecked</label>
        </div>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="defaultUnchecked4"/>
          <label className="custom-control-label" for="defaultUnchecked4">Default unchecked</label>
        </div>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="defaultUnchecked5"/>
          <label className="custom-control-label" for="defaultUnchecked5">Default unchecked</label>
        </div>
      </>
    );
  }
}

export default Category;
