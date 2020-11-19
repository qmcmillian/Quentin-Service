import React, { useState } from 'react';
import { Container, NumberOfStars, Percentage, fullBarStyle, hoverBarStyle, StyledBar } from '../styles/Styles.jsx';

const RatingBar = ({ percentage, stars, handleRatingBarClick }) => {
  const [hoverStyle, setHoverStyle] = useState(false);

  return (
    <Container onMouseEnter={() => setHoverStyle(true)} onMouseLeave={() => setHoverStyle(false)} onClick={() => handleRatingBarClick(stars)}>
      <NumberOfStars hover={hoverStyle}>{stars} star</NumberOfStars>
      <div style={hoverStyle ? hoverBarStyle : fullBarStyle}>
        <StyledBar hover={hoverStyle} width={percentage}></StyledBar>
      </div>
      <Percentage hover={hoverStyle}>{percentage}%</Percentage>
    </Container>
  );
};

export default RatingBar;

