import React, { Component } from 'react';
import './search-box.component.css';
const SearchBox = ({classnames,placeholder,onChangeHandler}) =>(
    <input
    placeholder={placeholder}
    type="search"
    className={classnames}
    onChange={onChangeHandler}
  />
  );
export default SearchBox;
