import React, { Component } from 'react';



class Repos extends Component {

  render(){
    let userdata = this.props.userData;
    console.log(userdata);

    if(userdata.message === "Not Found"){
      return(
        <div className="notfound">
          <h2>Hi</h2>
          <p>Search Term not found. Please Try again</p>
        </div>
      );
    }
    else {
      return(
        <div className="github-repo">
        <a target ="_blank" href={userdata.html_url}>
          <div className="github-repo-info">
            <h3>{`Username: ${userdata.owner.login}`}</h3>
            <h3>{`Repo Name: ${userdata.name}`}</h3>
            <h3>{`Stars: ${userdata.stargazers_count}`}</h3>
            <h3>{`Score: ${userdata.score.toFixed(0)}`}</h3>
            <h3>{`Language: ${userdata.language}`}</h3>
            <h3>{`Description: ${userdata.description}`}</h3>
          </div>
          </a>
        </div>
      );
    }
  }
}

export default Repos;
