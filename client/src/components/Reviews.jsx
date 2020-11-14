import React, { useState } from 'react';
import ReviewItem from './ReviewItem.jsx';
import styled from 'styled-components';

const Headline = styled.h1`
  font-family: 'PT Sans';
  font-size: 1.3em;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Reviews = ({topReviews, mostRecent}) => {
  const [sortBy, setSortBy] = useState('top')

  return (
    <div>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="top">Top reviews</option>
        <option value="recent">Most recent</option>
      </select>
      <Headline>Top reviews from the United States</Headline>
      {(sortBy === 'top' ? topReviews : mostRecent).map(review => <ReviewItem key={review.user_id} review={review}/>)}
    </div>
  );
};

export default Reviews;


/*

Top
.sort((a, b) => (a.helpful < b.helpful) ? 1 : -1),

Recent
.sort((a, b) => {
  return (new Date(b.review_date) > new Date(a.review_date)) ? 1 : -1;
})

*/