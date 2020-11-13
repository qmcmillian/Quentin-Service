import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35px;
`;

const Link = styled.p`
  color: #007185;
  font-family: 'PT Sans';
`;

const fullBarStyle = {
  backgroundColor: '#F0F2F2',
  height: '20px',
  width: '200px',
  borderRadius: '4px',
  boxShadow: 'inset 0 0 0 1px #E3E6E6'
};

const StyledBar = styled.div`
  background-color: #FFA41C;
  border-radius: 4px 0px 0px 4px;
  height: 100%;
  box-shadow: inset -2px 0 0 -1px #F5961D, inset 0 0 0 1px #DE7921;
  width: ${props => props.width}%;
`;

const RatingBar = ({percentage, stars}) => {
  return (
    <Container>
      <Link>{stars} star</Link>
      <div style={fullBarStyle}>
        <StyledBar width={percentage}></StyledBar>
      </div>
      <Link>{percentage}%</Link>
    </Container>
  );
};

export default RatingBar;

