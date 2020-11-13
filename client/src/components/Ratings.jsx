import React from 'react';
import RatingBar from './RatingBar.jsx';
import styled from 'styled-components';

const Headline = styled.h1`
  font-family: 'Amazon Ember';
  width: 300px;
  font-size: 1.5em;
`;

const Ratings = ({ratings}) => {
  const len = ratings.length;
  const totals = {};
  let sumTotal = 0;

  for (let rating of ratings) {
    sumTotal += rating;
    totals[rating] = ++totals[rating] || 1;
  }

  const globalAverage = (sumTotal / len).toFixed(1);

  let percentages = [0, 0, 0, 0, 0, 0];

  for (let rating in totals) {
    percentages[rating] = Math.round((totals[rating] / len) * 100);
  }

  percentages.reverse().pop();

  console.log(totals);
  console.log(percentages);

  return (
    <div>
      <Headline>Customer reviews</Headline>
        <div>Stars... {globalAverage} out of 5</div>
        <div>{len} global rating{len > 1 && 's'}</div>
        {percentages.map((percentage, index) => <RatingBar key={index} percentage={percentage} stars={5 - index}/>)}
    </div>
  );
};

export default Ratings;