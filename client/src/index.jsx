import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// later, import App from Components

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    console.log('component mounted');
    const randomProductId = Math.floor(Math.random() * 100) + 1;
    axios.get(`/api/products/${randomProductId}/reviews`)
      .then(results => console.log(results.data));
  }

  render() {
    return (
      <div>Succesfully rendering main App component!</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));