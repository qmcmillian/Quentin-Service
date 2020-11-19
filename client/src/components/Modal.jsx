import React from 'react';
import ReactDom from 'react-dom';
import { ModalStyles, OverlayStyles, modalMain, imageStyles, CloseBtn, ModalHeader } from './styles/Styles.jsx';

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

