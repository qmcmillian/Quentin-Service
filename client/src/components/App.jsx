import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import DomesticReviews from './DomesticReviews.jsx';
import IntlReviews from './IntlReviews.jsx';
import CustomerImages from './CustomerImages.jsx';
import ProductReviewBtn from './ProductReviewBtn.jsx';
import GlobalFonts from '../fonts/fonts.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Loading = styled.h1`
  font-family: 'PT Sans';
  font-size: 1.3em;
`;

const LeaveReview = styled.h3`
  font-family: 'PT Sans';
  font-weight: 400;
  margin-top: 75px;
`;

const ReviewButton = styled.button`
  font-family: "PT Sans";
  background-image: linear-gradient(rgb(244, 226, 181), rgb(240, 195, 80));
  border: 0;
  border-radius: 3px;
  padding: 5px 15px;
  cursor: pointer;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      pageLoaded: false,
      sortByStars: false
    };

    this.handleRatingBarClick = this.handleRatingBarClick.bind(this);
  }

  handleRatingBarClick(numStars) {
    console.log('inside app sort by stars', numStars);
    // perhaps we can open up a modal if we have time?
    // this.setState({
    //   sortByStars: numStars
    // });
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
    let reviews = this.state.reviews;
    console.log(reviews);

    // if (this.state.sortByStars) {
    //   reviews = reviews.filter(review => review.overall_rating === this.state.sortByStars);
    // }

    const unitedStates = [];
    const international = [];
    for (let review of reviews) {
      if (review.country === 'the United States') {
        unitedStates.push(review);
      } else {
        international.push(review);
      }
    }

    const ratings = reviews.map(review => review.overall_rating);
    const imageUrls = [];
    reviews.forEach(review => {
      if (review.product_photo) {
        imageUrls.push(review.product_photo);
      }
    });

    return (
      <div>
        {!this.state.pageLoaded ? <Loading>Loading reviews...</Loading> :
        <Wrapper>
          <GlobalFonts />
          <div style={{display: 'block'}}>
            <Ratings ratings={ratings} handleRatingBarClick={this.handleRatingBarClick}/>
            <ProductReviewBtn />
          </div>
          {reviews.length ?
          <div style={{display: 'block'}}>
            <CustomerImages imageUrls={imageUrls}/>
            <DomesticReviews domesticReviews={unitedStates}/>
            <IntlReviews intlReviews={international}/>
          </div>
          :
          <div>
            <LeaveReview>Share your thoughts with other customers</LeaveReview>
            <ReviewButton>Write a customer review</ReviewButton>
          </div>}
        </Wrapper>
        }
      </div>
    );
  }
}

export default App;

