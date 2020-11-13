import React from 'react';
import styled from 'styled-components';

const fullBarStyle = {
  backgroundColor: '#F0F2F2',
  height: '20px',
  width: '200px',
  marginRight: '150px',
  marginTop: '15px',
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

// {
//   backgroundColor: '#FFA41C',
//   borderRadius: '4px 0px 0px 4px',
//   height: '100%',
//   width: ${props => props.width},
//   boxShadow: 'inset -2px 0 0 -1px #F5961D, inset 0 0 0 1px #DE7921'
// };

const RatingBar = ({percentage, stars}) => {

  return (
    <div style={fullBarStyle}>
      <StyledBar width={percentage}></StyledBar>
    </div>
  );
};

export default RatingBar;

// <div>{`${percentage}% of people rated this product ${stars} stars`}</div>

