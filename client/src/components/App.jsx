import React, { Component } from 'react';
import Ratings from './ratings//Ratings.jsx';
import ProductReviewBtn from './ratings/ProductReviewBtn.jsx';
import CustomerImages from './customer_images/CustomerImages.jsx';
import DomesticReviews from './reviews/DomesticReviews.jsx';
import IntlReviews from './reviews/IntlReviews.jsx';
import GlobalFonts from './styles/fonts.js';
import { Wrapper, Loading, LeaveReview, ReviewButton } from './styles/Styles.jsx';
import axios from 'axios';

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
    // const randomProductId = window.location.pathname.split('/').join('');
    // console.log(window.location.pathname);
    const randomProductId = Math.floor(Math.random() * 100) + 1;
    axios.get(`/api/reviews/${randomProductId}`)
      .then(results => {
        this.setState({
          reviews: results.data,
          pageLoaded: true
        });
      })
      .catch(err => console.log('There was an error in making the API request for product reviews:', err));
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

