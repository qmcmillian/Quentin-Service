import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
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

    // Keyword extraction API
    var myHeaders = new Headers();
    myHeaders.append("apikey", "EOqzyV2gQYP6t8uOW7GGCpKB0zvqkFIO");

    var raw = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.";

    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: myHeaders,
      body: raw
    };

    fetch("https://api.promptapi.com/keyword", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
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
    console.log('IMAGES', imageUrls);

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
            <Reviews reviews={unitedStates} location={'us'}/>
            <Reviews reviews={international} location={'intl'}/>
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

