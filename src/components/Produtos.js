import React from 'react';

const Produtos = (props) => {
  return (
    <form onSubmit={props.handleSubmit} action="">
      <div className="input-field">
        <input
          placeholder="Search movie"
          onChange={props.handleChange}
          id="first_name2"
          type="text"
          className="validate"
          />
      </div>
    </form>
  )
}

export default Produtos;
