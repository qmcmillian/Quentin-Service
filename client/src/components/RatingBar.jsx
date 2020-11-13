import React from 'react';

const RatingBar = ({percentage, stars}) => {
  return (
    <div>{`${percentage}% of people rated this product ${stars} stars`}</div>
  );
};

export default RatingBar;