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

const Reviews = ({reviews}) => {
  const [sortBy, setSortBy] = useState('top');

  const topReviews = [...reviews].sort((a, b) => (a.helpful < b.helpful) ? 1 : -1);
  const mostRecent = [...reviews].sort((a, b) => {
    return (new Date(b.review_date) > new Date(a.review_date)) ? 1 : -1;
  });

  return (
    <div>
      {reviews.length ?
        <div>
        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="top">Top reviews</option>
          <option value="recent">Most recent</option>
        </Select>
        <Headline>Top reviews from the United States</Headline>
        {/* I'm passing the index as the key because this somehow solved the sorting issue */}
        {(sortBy === 'top' ? topReviews : mostRecent).map((review, index) => <ReviewItem key={index} review={review}/>)}
      </div>
      :
      <div>
        <LeaveReview>Share your thoughts with other customers</LeaveReview>}
        <ReviewButton>Write a customer review</ReviewButton>
      </div>}
    </div>
  );
};

export default Reviews;

