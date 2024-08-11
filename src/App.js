import React, { useState, Component } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import './App.css';
class App extends Component {
  constructor() {
    console.log('inside the constructor');
    super();
    this.state = {
      monsters: [],
      SearchField: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
            return { monsters: users };
          } )
      );
  }
  onSearchChange = (event) => {
    const SearchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { SearchField };
    });
  };
  render() {
    const { monsters, SearchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonstres = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(SearchField);
    });
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder={'Search monsters'}  className={'monsters-search-box'}/>
        <CardList monsters={filteredMonstres}/>
      </div>
    );
  }
}
export default App;
