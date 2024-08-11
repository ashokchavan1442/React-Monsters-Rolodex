import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import './App.css';
const App = () => {
  console.log('render');
  const [SearchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonstres, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    const NewFilteredMonstres = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(SearchField);
    });
    setFilterMonsters(NewFilteredMonstres);
  }, [monsters, SearchField])

  const onSearchChange = (event) => {
    const SearchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(SearchFieldString);
  }
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder={'Search monsters'} classnames={'monsters-search-box'} />
      <CardList monsters={filteredMonstres} />
    </div>
  );

}
export default App;
