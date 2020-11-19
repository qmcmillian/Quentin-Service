import React from 'react';
import styled from 'styled-components';

const Stars = ({rating, height}) => {
  return (
    <div>
      {[...Array(5)].map((item, index) => {
        let star = rating - index;
        let typeOfStar;
        if (star >= 0.8) {
          typeOfStar = 1; // full
        } else if (star >= 0.21) {
          typeOfStar = 2; // half
        } else {
          typeOfStar = 3; // empty
        }
        return <img src={`https://hr-fec.s3.us-east-2.amazonaws.com/amz-star-pngs/${typeOfStar}.png`} style={{height: height}}></img>
      })}
    </div>
  )
};

export default Stars;
