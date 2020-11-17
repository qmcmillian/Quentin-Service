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
  margin-top: 30px;
  border-radius: 5px;
`;

const NoReviews = styled.h2`
  font-family: 'PT Sans';
  font-size: 1em;
`;

const IntlReviews = ({intlReviews}) => {
  intlReviews.sort((a, b) => (a.helpful < b.helpful) ? 1 : -1);

  return (
    <div style={{marginBottom: '50px'}}>
      {intlReviews.length ?
      <div>
        <Headline>Top reviews from other countries</Headline>
        {intlReviews.map((review, index) => <ReviewItem key={index} review={review}/>)}
      </div>
      :
      <NoReviews>No reviews from other countries</NoReviews>}
    </div>
  );
};

export default IntlReviews;