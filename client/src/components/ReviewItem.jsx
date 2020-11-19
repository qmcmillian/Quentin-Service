import React from 'react';
import Stars from './styles/Stars.jsx';
import { ReviewItemContainer, Avatar, Box, ReviewItemHeadline, ReviewText, ReviewGrayText, Comment, Report, ThinLine, Verified, HelpfulBtn, Highlight } from './styles/Styles.jsx';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ReviewItem = ({review, keyword}) => {
  const {avatar, country, full_text, headline, overall_rating, review_date, user_name, verified_purchase, helpful} = review;

  let [year, month, day] = review_date.split('T')[0].split('-');

  const highlightText = (text, keyword) => {
    if (!keyword) {
      return text;
    }
    // I want to understand exactly how this works, specifically reduce
    return (<span>
      { text.split(keyword)
        .reduce((acc, current) => {
          return acc.concat(<Highlight key={keyword + current}>{ keyword }</Highlight>, current);
        }, [])
      }
    </span>);
  };

  return (
  <ReviewItemContainer>
    <Avatar>
      <img src={avatar} style={{borderRadius: '100%', width: '30px', height: '30px', objectFit: 'cover'}}/>
      <div style={{marginLeft: '10px', fontFamily: 'PT Sans', fontSize: '.85em'}}>{user_name}</div>
    </Avatar>
    <Box>
      <Stars rating={overall_rating} height={'15px'}/><ReviewItemHeadline>{headline}</ReviewItemHeadline>
    </Box>
    <ReviewGrayText>
      Reviewed in {country} on {`${months[month - 1]} ${day}, ${year}`}
    </ReviewGrayText>
    {verified_purchase === 1 && <Verified>Verified Purchase</Verified>}
    <ReviewText>{highlightText(full_text, keyword)}</ReviewText>
    <ReviewGrayText>
      {helpful !== 1 ? `${helpful} people found this helpful` : 'One person found this helpful'}
    </ReviewGrayText>
    <div style={{display: 'inline-flex', alignItems: 'center', width: '300px', height: '50px'}}>
      <HelpfulBtn>Helpful</HelpfulBtn>
      <ThinLine><Comment>Comment</Comment></ThinLine>
      <ThinLine><Report>Report abuse</Report></ThinLine>
    </div>
  </ReviewItemContainer>
  );
};

export default ReviewItem;

