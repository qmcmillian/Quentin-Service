import React, { useState } from 'react';
import ReviewItem from './ReviewItem.jsx';
import styled from 'styled-components';

const Headline = styled.h1`
  font-family: 'PT Sans';
  font-size: 1.3em;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Select = styled.select`
  font-family: 'PT Sans';
  font-size: .7em;
  background-color: #f1f2f2;
  padding: 1px 40px 1px 3px;
  margin-bottom: 22px;
  border-radius: 5px;
`;

const Reviews = ({topReviews, mostRecent}) => {
  const [sortBy, setSortBy] = useState('top')

  return (
    <div>
      <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="top">Top reviews</option>
        <option value="recent">Most recent</option>
      </Select>
      <Headline>Top reviews from the United States</Headline>
      {/* I'm passing the index as the key because this somehow solved the sorting issue */}
      {(sortBy === 'top' ? topReviews : mostRecent).map((review, index) => <ReviewItem key={index} review={review}/>)}
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