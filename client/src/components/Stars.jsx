import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

// Star unicode:
// \u2605

// const starStyles = {
//   color: '#FFA41C'
// };

const Stars = ({rating}) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        return <FaStar size={20} color={index + 1 <= rating ? '#FFA41C' : '#f2f2f2'}/>;
      })}
    </div>
  )
};

export default Stars;
