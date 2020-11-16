import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 35px;
`;

const Link = styled.p`
  color: #007185;
  font-family: 'PT Sans';
  margin-right: 3px;
  min-width: 50px;
`;

const Link2 = styled.p`
  color: #007185;
  font-family: 'PT Sans';
  margin-left: 5px;
  min-width: 50px;
`;

const fullBarStyle = {
  backgroundColor: '#F0F2F2',
  height: '20px',
  width: '200px',
  borderRadius: '4px',
  boxShadow: 'inset 0 0 0 1px #E3E6E6',
  marginRight: '10px'
};

const StyledBar = styled.div`
  background-color: #FFA41C;
  border-radius: ${props => props.width === 100 ? '4px' : '4px 0px 0px 4px'};
  height: 100%;
  box-shadow: inset -2px 0 0 -1px #F5961D, inset 0 0 0 1px #DE7921;
  width: ${props => props.width}%;
`;

const RatingBar = ({ percentage, stars }) => {
  return (
    <Container onMouseOver={(e) => console.log('mouse over', e)}>
      <Link>{stars} star</Link>
      <div style={fullBarStyle}>
        <StyledBar width={percentage}></StyledBar>
      </div>
      <Link2>{percentage}%</Link2>
    </Container>
  );
};

export default RatingBar;

/*

Single digits (or 100%) misaligns the rating bar

Conditionally style the bar's border radius depending on whether it's 100% or not (if it is 100%, make top-right and bottom-right rounded)

*/