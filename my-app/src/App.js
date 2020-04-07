import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      git: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/dawsonhammdev").then(response => {
      this.setState({
        git: response.data.message,
      });
    });
  }

}

export default App;
