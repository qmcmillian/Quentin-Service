import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import GlobalFonts from '../fonts/fonts.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      topReviews: [],
      mostRecent: []
    };
  }

  componentDidMount() {
    const randomProductId = Math.floor(Math.random() * 100) + 1;
    axios.get(`/api/products/${randomProductId}/reviews`)
      .then(results => {
        console.log('unsorted reviews', results.data);
        // doing the sorting here
        // Passing pre-sorted reviews into Reviews component
        // Sorts once before the first render, then the toggle is lightning fast because we don't have to repeatedly sort the reviews
        const top = [...results.data].sort((a, b) => (a.helpful < b.helpful) ? 1 : -1);
        const recent = [...results.data].sort((a, b) => {
          return (new Date(b.review_date) > new Date(a.review_date)) ? 1 : -1;
        });
        console.log('top reviews', top);
        console.log('recent reviews', recent);
        this.setState({
          reviews: results.data,
          topReviews: top,
          mostRecent: recent
        });
      });
  }

  render() {
    const reviews = this.state.topReviews;

    const ratings = reviews.map(review => review.overall_rating);
    return (
      <Wrapper>
        <GlobalFonts />
        {reviews.length ? <Ratings ratings={ratings} /> : 'No ratings yet for product'}
        {reviews.length ? <Reviews topReviews={reviews} mostRecent={this.state.mostRecent} /> : 'No reviews yet for product.'}
      </Wrapper>
    );
  }
}

export default App;