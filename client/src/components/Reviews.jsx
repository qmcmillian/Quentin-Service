import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import styled from 'styled-components';

const Headline = styled.h1`
  font-family: 'PT Sans';
  font-size: 1.3em;
`;

const Reviews = ({reviews}) => (
  <div>
    <Headline>Top reviews from the United States</Headline>
    {reviews.map(review => <ReviewItem key={review.user_id} review={review}/>)}
  </div>
);

export default Reviews;