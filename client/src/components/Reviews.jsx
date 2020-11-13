import React from 'react';
import ReviewItem from './ReviewItem.jsx';
import styled from 'styled-components';

const Headline = styled.h1`
  font-family: 'Amazon Ember';
  font-size: 1.1em;
`;

const Reviews = ({reviews}) => (
  <div>
    Reviews filter
    <Headline>Top reviews from the United States</Headline>
    <ul>
    {reviews.map(review => <li><ReviewItem key={review.user_id} review={review}/></li>)}
    </ul>
  </div>
);

export default Reviews;