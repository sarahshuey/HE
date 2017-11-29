import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

let search_string = "";
let sort_option = "score";

class Search extends Component {

  submitForm(event){
    event.preventDefault();
    let search_string = this.refs.searchterm.value;
    console.log(sort_option);
    this.props.searchRepos(search_string);

  }

  render(){
    return(
      <div>
      <div className="search-body">
      <div className="header">
      Github Repo Search
      </div>
      <div className="search-box">
        <form onSubmit={this.submitForm.bind(this)}>
          <label><input type="search" ref="searchterm" placeholder="Type Search Term & Hit Enter"/></label>
        </form>
      </div>
      </div>
      </div>

    );
  }
}

export default Search
