import React, { useState } from 'react';
import ReviewItem from './ReviewItem.jsx';
import { Headline, NoReviews } from './Styles.jsx';

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