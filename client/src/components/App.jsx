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
      reviews: []
    };
  }

  componentDidMount() {
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
    const reviews = this.state.reviews;

    // Passing pre-sorted reviews into Reviews component
    // Sorts once before the first render, then the toggle is lightning fast because we don't have to repeatedly sort the reviews
    const topReviews = [...reviews].sort((a, b) => (a.helpful < b.helpful) ? 1 : -1);
    const mostRecent = [...reviews].sort((a, b) => {
      return (new Date(b.review_date) > new Date(a.review_date)) ? 1 : -1;
    });

    const ratings = reviews.map(review => review.overall_rating);
    return (
      <Wrapper>
        <GlobalFonts />
        {reviews.length ? <Ratings ratings={ratings}/> : 'No ratings yet for product'}
        {reviews.length ? <Reviews topReviews={topReviews} mostRecent={mostRecent}/> : 'No reviews yet for product.'}
      </Wrapper>
    );
  }
}

export default App;