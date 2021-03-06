import React, { Component } from 'react';
import Repos from './Repos';
import Search from './Search';
import Sort from './Sort';

const API = 'https://api.github.com/search/repositories?q='
const SORT_VAR = '&sort='
class Github extends Component {

  constructor(props){
    super(props);

    this.state = {
      search_name:'',
      sort_type:'score',
      repos:[]
    };
  }

  getReposName(search_string){
    this.setState({search_name: search_string})
    let finalURL = `${API}${search_string}${SORT_VAR}${this.state.sort_type}`;
    fetch(finalURL)
    .then((res) => res.json() )
    .then((data) => {
      console.log(data);
      this.setState({
      repos: data.items
      })
    })
    .catch((error) => console.log('Unable to fetch data'))
  }
  getReposSort(sort_option){
    this.setState({sort_type: sort_option})
    console.log(this.state.search_name);

    let finalURL = `${API}${this.state.search_name}${SORT_VAR}${sort_option}`;
  console.log(finalURL);
    fetch(finalURL)
    .then((res) => res.json() )
    .then((data) => {
      console.log(data);
      this.setState({
      repos: data.items
      })
    })
    .catch((error) => console.log('Unable to fetch data'))
  }
  renderRepos() {
    return this.state.repos.map(repo =>
      <div id="card">
        <Repos userData={repo}/>
      </div>
    );
  }

  componentDidMount(){
    this.getReposName(this.state.searchterm);
  }

  render(){
    return(
      <div className="all">
      <div className="search-sort">
      <Search searchRepos={this.getReposName.bind(this)}  />
      <Sort sortRepos={this.getReposSort.bind(this)}/>
      </div>
      <div className="repos">
        {this.renderRepos()}
        </div>
      </div>
    );
  }
}

export default Github;
