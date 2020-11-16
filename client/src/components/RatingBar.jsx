import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 35px;
`;

const Link = styled.p`
  color: ${props => props.hover ? '#C7511F' : '#007185'};
  font-family: 'PT Sans';
  margin-right: 3px;
  min-width: 50px;
  cursor: ${props => props.hover ? 'pointer' : 'none'};
  text-decoration: ${props => props.hover ? 'underline' : 'none'};
`;

const Link2 = styled.p`
  color: ${props => props.hover ? '#C7511F' : '#007185'};
  font-family: 'PT Sans';
  margin-left: 5px;
  margin-right: 0;
  min-width: 50px;
  cursor: ${props => props.hover ? 'pointer' : 'none'};
  text-decoration: ${props => props.hover ? 'underline' : 'none'};
`;

const fullBarStyle = {
  backgroundColor: '#F0F2F2',
  height: '20px',
  width: '200px',
  borderRadius: '4px',
  boxShadow: 'inset 0 0 0 1px #E3E6E6',
  marginRight: '10px'
};

const hoverBarStyle = {
  backgroundColor: '#fff6e0',
  height: '20px',
  width: '200px',
  borderRadius: '4px',
  boxShadow: 'inset -2px 0 0 -1px #F5961D, inset 0 0 0 1px #DE7921',
  marginRight: '10px',
  cursor: 'pointer'
};

const StyledBar = styled.div`
  background-color: #FFA41C;
  border-radius: ${props => props.width === 100 ? '4px' : '4px 0px 0px 4px'};
  height: 100%;
  box-shadow: inset -2px 0 0 -1px #F5961D, inset 0 0 0 1px #DE7921;
  width: ${props => props.width}%;
`;

const RatingBar = ({ percentage, stars, handleRatingBarClick }) => {
  const [hoverStyle, setHoverStyle] = useState(false);

  return (
    <Container onMouseEnter={() => setHoverStyle(true)} onMouseLeave={() => setHoverStyle(false)} onClick={() => handleRatingBarClick(stars)}>
      <Link hover={hoverStyle}>{stars} star</Link>
      <div style={hoverStyle ? hoverBarStyle : fullBarStyle}>
        <StyledBar hover={hoverStyle} width={percentage}></StyledBar>
      </div>
      <Link2 hover={hoverStyle}>{percentage}%</Link2>
    </Container>
  );
};

export default RatingBar;

