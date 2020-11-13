import React from 'react';
import styled from 'styled-components';

const Headline = styled.h1`
  font-family: 'Amazon Ember';
  font-size: .9em;
`;

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ReviewItem = ({review}) => {
  const {avatar, country, full_text, headline, overall_rating, review_date, user_name, verified_purchase, helpful} = review;

  let [year, month, day] = review_date.split('T')[0].split('-');

  return (
  <div>
    <div>
      <img src={avatar} />
      {user_name}
    </div>
    <div>
      Stars Component... <Headline>{headline}</Headline>
    </div>
    <div>
      Reviewed in {country} on {`${months[month - 1]} ${day}, ${year}`}
    </div>
    {verified_purchase === 1 && 'Verified Purchase'}
    <div>
      {full_text}
    </div>
    <div>
      {`${helpful} people found this helpful`}
    </div>
    <span>
      <button>Helpful</button> | Comment | Report abuse
    </span>
  </div>
  );
};

export default ReviewItem;

/*

avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kevinjohndayy/128.jpg"
country: "the United States"
full_text: "Qui repudiandae asperiores accusamus nihil molestiae commodi. Optio itaque assumenda autem asperiores nam. Est sit necessitatibus sit vel unde sunt maiores. Qui placeat tempora voluptatibus quia sint quis."
headline: "ut dolores sequi"
helpful: 35
overall_rating: 1
product_id: 70
review_date: "2020-11-12T10:39:40.000Z"
user_id: 94
user_name: "Juliet37"
verified_purchase: 1


*/