import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import BlueText from './BlueText.jsx';

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

const NoImages = styled.h1`
  font-family: 'PT Sans';
  font-size: 1em;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 10px;
`;

const CustomerImages = ({imageUrls}) => {
  const [onHover, setOnHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Headline>Customer images</Headline>
      {!imageUrls.length ? <NoImages>No customer images yet.</NoImages> :
      <div>
      {imageUrls.map((image, index) => {
        if (image && index < 4) {
          return <img src={image} style={imgStyle}/>
        }
      })}
      <BlueText onClick={() => setIsOpen(true)}>See all customer images</BlueText>
      <Modal imageUrls={imageUrls} open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </div>}
    </div>
  )
};

export default CustomerImages;