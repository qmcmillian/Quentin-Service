import React from 'react';
import ReviewItem from './ReviewItem.jsx';

const Reviews = ({reviews}) => (
  <div>
    Reviews filter, Top reviews from location
    <ul>
    {reviews.map(review => <li><ReviewItem key={review.user_id} review={review}/></li>)}
    </ul>
  </div>
);

export default Reviews;