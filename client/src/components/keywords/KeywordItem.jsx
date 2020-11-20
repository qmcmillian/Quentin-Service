import React, { useState } from 'react';
import { KeywordStyles } from '../styles/Styles.jsx';

const KeywordItem = ({children, onClick, selected}) => {
  const [hover, setHover] = useState(false);

  return (
  <KeywordStyles selected={selected} onClick={onClick} hover={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{children}</KeywordStyles>
  )
};

export default KeywordItem;