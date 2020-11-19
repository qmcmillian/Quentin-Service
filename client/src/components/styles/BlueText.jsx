import React, { useState } from 'react';
import { BlueTextStyles } from './Styles.jsx';

const BlueText = ({children, onClick}) => {
  const [hover, setHover] = useState(false);

  return (
  <BlueTextStyles onClick={onClick} hover={hover} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{children}</BlueTextStyles>
  )
};

export default BlueText;