import React, { useState } from 'react';
import styled from 'styled-components';

const BlueTextStyles = styled.p`
  color: ${props => props.hover ? '#C7511F' : '#007185'};
  font-family: 'PT Sans';
  cursor: ${props => props.hover ? 'pointer' : 'none'};
  text-decoration: ${props => props.hover ? 'underline' : 'none'};
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: .9em;
`;

const BlueText = ({children, onClick}) => {
  const [hover, setHover] = useState(false);

  return (
  <BlueTextStyles onClick={onClick} hover={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{children}</BlueTextStyles>
  )
};

export default BlueText;