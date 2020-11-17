import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const ModalStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '90%',
  backgroundColor: '#fff',
  borderRadius: '20px 20px 8px 8px',
  zIndex: 1000,
};

const OverlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .5)',
  zIndex: 1000
};

const ModalHeader = styled.div`
  position: fixed;
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #D5D9D9;
  border-radius: 8px 8px 0 0;
  background-image: linear-gradient(rgba(251, 251, 251, 1), rgb(242, 242, 242, 1));
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const modalMain = {
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '70px',
  padding: '15px 25px'
};

const imageStyles = {
  height: '128px',
  width: '128px',
  margin: '5px',
  objectFit: 'cover'
};

const CloseBtn = styled.button`
  border: 1px solid #e77600;
  box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
  cursor: pointer;
  height: 45px;
  width: 45px;
  margin-right: 5px;
  border-radius: 3px;
`;

const Modal = ({open, imageUrls, onClose}) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
    <div style={OverlayStyles}/>
    <div style={ModalStyles}>
      <ModalHeader>
        <CloseBtn onClick={onClose}>{'\u2715'}</CloseBtn>
      </ModalHeader>
      <div style={modalMain}>
        {imageUrls.map(url => <img src={url} style={imageStyles}/>)}
      </div>
    </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
