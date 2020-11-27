import React from 'react';
// import { KeywordStyles } from '../styles/Styles.jsx';
import s from '../styles/KeywordItem.css';

const KeywordItem = ({children, onClick, selected}) => {
  const isSelected = selected ? s.selected : '';
  return (
  <div className={`${s.keywordItem} ${isSelected}`} onClick={onClick}>{children}</div>
  )
};

export default KeywordItem;