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

const Loading = styled.h1`
  font-family: 'PT Sans';
  font-size: 1.3em;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      pageLoaded: false
    };
  }

  componentDidMount() {
    const randomProductId = Math.floor(Math.random() * 100) + 1;
    axios.get(`/api/products/${randomProductId}/reviews`)
      .then(results => {
        this.setState({
          reviews: results.data,
          pageLoaded: true
        });
      });
  }

  render() {
    const reviews = this.state.reviews;

    const ratings = reviews.map(review => review.overall_rating);
    return (
      <div>
        {!this.state.pageLoaded ? <Loading>Loading reviews...</Loading> :
        <Wrapper>
          <GlobalFonts />
          <Ratings ratings={ratings} />
          <Reviews reviews={reviews} />
        </Wrapper>
        }
      </div>
    );
  }
}

export default App;