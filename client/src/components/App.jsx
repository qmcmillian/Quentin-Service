import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

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
      .then(results => {
        console.log(results.data);
        this.setState({
          reviews: results.data
        });
      });
  }

  render() {
    return (
      <div>Succesfully rendering main App component!
        <Ratings />
        {this.state.reviews.length ? <Reviews reviews={this.state.reviews}/> : 'No reviews yet for product.'}
      </div>
    );
  }
}

export default App;