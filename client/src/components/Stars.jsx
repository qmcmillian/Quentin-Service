import React from 'react';
import styled from 'styled-components';

// Star unicode:
// \u2605

const starStyles = {
  color: '#FFA41C',
  fontSize: '1.5em'
};

const Stars = ({rating}) => {
  return (
    <div style={starStyles}>
      {'\u2605\u2605\u2605\u2605\u2605'}
    </div>
  )
};

export default Stars;
