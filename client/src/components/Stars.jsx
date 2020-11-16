import React from 'react';
import styled from 'styled-components';
import FullStar from '../img/full-star.png';
import HalfStar from '../img/half-star.png';
import EmptyStar from '../img/empty-star.png';

// const starImg = {
//   height: '20px',
// };

const Stars = ({rating, height}) => {
  return (
    <div>
      {[...Array(5)].map((item, index) => {
        let star = rating - index;
        let typeOfStar;
        if (star >= 0.8) {
          typeOfStar = FullStar;
        } else if (star > 0.2) {
          typeOfStar = HalfStar;
        } else {
          typeOfStar = EmptyStar;
        }
        return <img src={typeOfStar} style={{height: height}}></img>
      })}
    </div>
  )
};

export default Stars;

