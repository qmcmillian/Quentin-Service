import React from 'react';
import RatingBar from './RatingBar.jsx';

const Ratings = ({ratings}) => {
  const totals = {};
  let sumTotal = 0;
  const len = ratings.length;

  for (let rating of ratings) {
    sumTotal += rating;
    totals[rating] = ++totals[rating] || 1;
  }

  for (let rating in totals) {
    totals[rating] = Math.round((totals[rating] / len) * 100);
  }

  const globalAverage = (sumTotal / len).toFixed(1);

  return (
    <div>
      <div>Customer reviews</div>
        <div>Stars... {globalAverage} out of 5</div>
        <div>{len} global rating{len > 1 && 's'}</div>
    </div>
  );
};

export default Ratings;