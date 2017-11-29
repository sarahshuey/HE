import React, { Component } from 'react';


class Sort extends Component{
  submitButton(event){
    let sort_option = event.target.value;
    console.log(sort_option);
    this.props.sortRepos(sort_option)
    //this.props.searchRepos(search_string);
  }
  render(){
    return(
      <div className="sort-buttons">
        <label>SCORE<input type="radio" name="sort" className="score" onClick={this.submitButton.bind(this)}  value="score"/></label>
        <label>STARS<input type="radio" name="sort" className="stars" onClick={this.submitButton.bind(this)}  value="stars"/></label>
        <br/>
      </div>
    )
  }
}

export default Sort
