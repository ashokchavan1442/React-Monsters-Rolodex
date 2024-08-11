import React, { Component } from 'react';
import './search-box.component.css'
class SearchBox extends Component{
render(){
  return(
    <input
    placeholder={this.props.placeholder}
    type="search"
    className={this.props.className}
    onChange={this.props.onChangeHandler}
  />
  );
}
}
export default SearchBox;
