import React, { Component } from 'react';
import CharacterList from './characters/CharacterList';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.getNextPageChild = this.getNextPageChild.bind(this);
  }
  getNextPageChild() {
    this.props.getNextPage();
  }
  render() {
    console.log(this.props);
    return (
      <div className="page">
        <Header
          nameSearchHandler={this.props.nameSearchHandler}
          searchValue={this.props.searchValue}
          resetHandler={this.props.resetHandler}
          speciesList={this.props.speciesList}
          speciesSearchHandler={this.props.speciesSearchHandler}
          speciesFilter={this.props.speciesFilter}
        />
        <main className="main">
          <CharacterList
            characterList={this.props.characterList}
            searchValue={this.props.searchValue}
          />
          <button onClick={this.getNextPageChild} className="load-more">
            Load more results
          </button>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
