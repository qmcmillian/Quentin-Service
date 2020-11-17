import React, { useState } from 'react';
import styled from 'styled-components';

const Headline = styled.h1`
  font-family: 'PT Sans';
  font-size: 1.3em;
  margin-top: 0;
  margin-bottom: 10px;
`;

const imgStyle = {
  height: '137px',
  width: '137px',
  marginRight: '5px',
  objectFit: 'cover'
};

const SeeAllImages = styled.p`
  color: ${props => props.hover ? '#C7511F' : '#007185'};
  font-family: 'PT Sans';
  cursor: ${props => props.hover ? 'pointer' : 'none'};
  text-decoration: ${props => props.hover ? 'underline' : 'none'};
  margin-bottom: 0;
`;

const CustomerImages = ({imageUrls}) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div>
      <Headline>Customer images</Headline>
      {imageUrls.map((image, index) => {
        if (image && index < 4) {
          return <img src={image} style={imgStyle}/>
        }
      })}
      <SeeAllImages hover={onHover} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>See all customer images</SeeAllImages>
    </div>
  )
};

export default CustomerImages;