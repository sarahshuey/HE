import React, { Component } from 'react';



class Search extends Component {

  submitForm(event){
    event.preventDefault();
    let search_string = this.refs.searchterm.value;
    this.props.searchRepos(search_string);

  }

  render(){
    return(
      <div className="search-body">
      <div className="header">
      GitHub Repo Search
      </div>
      <div className="search-box">
        <form onSubmit={this.submitForm.bind(this)}>
          <label><input type="search" ref="searchterm" placeholder="Type Search Term & Hit Enter"/></label>
        </form>
      </div>
      </div>
    );
  }
}

export default Search
