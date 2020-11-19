import React, { Component } from 'react';
import axios from 'axios';
import Ratings from './ratings//Ratings.jsx';
import ProductReviewBtn from './ratings/ProductReviewBtn.jsx';
import DomesticReviews from './DomesticReviews.jsx';
import IntlReviews from './IntlReviews.jsx';
import CustomerImages from './CustomerImages.jsx';
import GlobalFonts from '../fonts/fonts.js';
import { Wrapper, Loading, LeaveReview, ReviewButton } from './styles/Styles.jsx';

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
    const setStars = this.state.sortByStars !== numStars ? numStars : false;
    this.setState({
      sortByStars: setStars
    });
  }

  componentDidMount() {
    const randomProductId = Math.floor(Math.random() * 100) + 1;
    axios.get(`/api/products/${randomProductId}/reviews`)
      .then(results => {
        this.setState({
          reviews: results.data,
          pageLoaded: true
        });
      })
      .catch(console.log);
  }

  render() {
    let reviews = this.state.reviews;

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
            <DomesticReviews domesticReviews={unitedStates} sortByStars={this.state.sortByStars}/>
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


/*

App

ratings
// Ratings
// RatingBar
// ProductReviewBtn

customer_images
// CustomerImages
// Modal

keywords
// Keywords

reviews
// DomesticReviews
// IntlReviews
// ReviewItem

styles
// BlueText
// Styles
// Stars



*/