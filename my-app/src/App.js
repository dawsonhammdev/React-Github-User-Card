import React from 'react';
import './App.css';
import axios from "axios";
import Logo from "./download.png"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      login: "",
      img: ""
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/dawsonhammdev")
    .then(response => {
      console.log(response.data)
       this.setState({
         user: response.data,
         login: response.data.login,
         img: response.data.avatar_url,
       });
    });

    axios.get("https://api.github.com/users/dawsonhammdev/followers")
    .then(peeps => {
      console.log(peeps.data)
      this.setState({
        followers: peeps.data.length
      })
    })
  }

  render() {
    return (
      
      <div className="App">
        <img className ="logo" src={Logo} alt="website logo"/>

      <div className="user">

    <h2>User Card</h2>
    <h3>{this.state.login}</h3>
    <img className="head" src={this.state.img} alt="Man" />
      <h3>Followers: {this.state.followers}</h3>

      </div>
      {console.log(this.state.user)}
      </div>
      
    )
  }

}

export default App;
