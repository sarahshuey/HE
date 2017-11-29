import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

let search_string = "";
let sort_option = "score";

class Sort extends Component{
  submitButton(event){
    let sort_option = event.target.value;
    console.log(sort_option);
    this.props.sortRepos(sort_option)
    //this.props.searchRepos(search_string);
  }
  render(){
    return(
      <div>
        <label>SCORE<input type="radio" name="sort" onClick={this.submitButton.bind(this)}  value="score"/></label>
        <label>STARS<input type="radio" name="sort" onClick={this.submitButton.bind(this)}  value="stars"/></label>
        <br/>
      </div>
    )
  }
}

export default Sort
