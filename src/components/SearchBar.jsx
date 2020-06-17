import React from 'react'

class SearchBar extends React.Component {
    render() {
      return (
        <div className="field">
            <input className="input is-rounded" type="text" />
            <p data-testid='home-initial-message' className="home-initial-message subtitle is-4">Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
      )
    }
  }

export default SearchBar
