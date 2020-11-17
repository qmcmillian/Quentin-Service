import React from 'react';
import styled from 'styled-components';
import Stars from './Stars.jsx';

const Container = styled.div`
  margin-bottom: 20px;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

const Headline = styled.h1`
  font-family: 'PT Sans';
  font-size: 1em;
  margin-left: 8px;
`;

const ReviewText = styled.p`
  font-family: 'PT Sans';
  font-size: 0.9em;
  margin: 5px 0 9px 0;
  max-width: 585px;
`;

const GrayText = styled.p`
  font-family: 'PT Sans';
  font-size: .9em;
  color: #565959;
  margin: 3px 0 0 0;
`;

const Comment = styled.p`
  font-family: 'PT Sans';
  font-size: .9em;
  color: #565959;
  margin: 3px 0 0 0;
  cursor: pointer;
`;

const Report = styled.p`
  font-family: 'PT Sans';
  font-size: .9em;
  color: #565959;
  width: 90px;
  margin: 3px 0 0 0;
  cursor: pointer;
`;

const ThinLine = styled.p`
  border-left: 1px solid #d1d1d1;
  padding: 0 15px;
  line-height: 100%;
`;

const Verified = styled.p`
  font-family: 'PT Sans';
  font-weight: 700;
  font-size: .8em;
  color: #c45500;
  margin: 3px 0 0 0;
`;

const Button = styled.button`
  font-family: 'PT Sans';
  height: 29px;
  width: 98px;
  padding: 1px 22px;
  cursor: pointer;
  opacity: .9;
  margin-right: 18px;
`;

// const highlight = {
//   backgroundColor: 'yellow'
// };

const Highlight = styled.span`
  background-color: #FFEBB7;
`;

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
  <Container>
    <Avatar>
      <img src={avatar} style={{borderRadius: '100%', width: '30px', height: 'auto'}}/>
      <div style={{marginLeft: '10px', fontFamily: 'PT Sans', fontSize: '.85em'}}>{user_name}</div>
    </Avatar>
    <Box>
      <Stars rating={overall_rating} height={'15px'}/><Headline>{headline}</Headline>
    </Box>
    <GrayText>
      Reviewed in {country} on {`${months[month - 1]} ${day}, ${year}`}
    </GrayText>
    {verified_purchase === 1 && <Verified>Verified Purchase</Verified>}
    {/* add span component for highlighting */}
    <ReviewText>{highlightText(full_text, keyword)}</ReviewText>
    <GrayText>
      {`${helpful} people found this helpful`}
    </GrayText>
    <div style={{display: 'inline-flex', alignItems: 'center', width: '300px', height: '50px'}}>
      <Button>Helpful</Button>
      <ThinLine><Comment>Comment</Comment></ThinLine>
      <ThinLine><Report>Report abuse</Report></ThinLine>
    </div>
  </Container>
  );
};

export default ReviewItem;

/*

/**
 * Find and highlight relevant keywords within a block of text
 * @param  {string} label - The text to parse
 * @param  {string} value - The search keyword to highlight
 * @return {object} A JSX object containing an array of alternating strings and JSX



highlightText('Lorem ipsum dolor sit amet', 'dolor');
// <span>Lorem ipsum <b>dolor</b> sit amet</span>


*/