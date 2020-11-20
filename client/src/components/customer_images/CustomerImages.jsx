import React, { useState } from 'react';
import Modal from './Modal.jsx';
import BlueText from '../styles/BlueText.jsx';
import { Headline, NoImages, imgStyle } from '../styles/Styles.jsx';

const CustomerImages = ({imageUrls}) => {
  const [onHover, setOnHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Headline>Customer images</Headline>
      {!imageUrls.length ? <NoImages>No customer images yet.</NoImages> :
      <div style={{marginTop: '10px'}}>
      {imageUrls.map((image, index) => {
        if (image && index < 4) {
          return <img key={index} src={image} style={imgStyle}/>
        }
      })}
      <BlueText onClick={() => setIsOpen(true)}>See all customer images</BlueText>
      <Modal imageUrls={imageUrls} open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </div>}
    </div>
  )
};

export default CustomerImages;