import React from 'react';
import styled from 'styled-components';

const Headline = styled.h1`
  font-family: "PT Sans";
  font-size: 1.3em;
  margin-top: 50px;
  margin-left: 10px;
  padding-top: 50px;
  border-top: 1px solid rgb(209, 209, 209);
  width: 300px;
`;

const Text = styled.p`
  font-family: 'PT Sans';
  font-size: 1em;
  font-weight: 400;
  margin-top: 10px;
  margin-left: 10px;
`;

const Button = styled.button`
  font-family: 'PT Sans';
  height: 29px;
  width: 300px;
  padding: 1px 22px;
  cursor: pointer;
  opacity: .9;
  margin-left: 10px;
  // background-image: linear-gradient(#fcfcfd, #e8e9ec);
  // border-radius: 3px;
`;


const ProductReviewBtn = () => {
  return (
    <div>
      <Headline>Review this product</Headline>
      <Text>Share your thoughts with other customers</Text>
      <Button>Write a customer review</Button>
    </div>
  );
};

export default ProductReviewBtn;


/*

style={{borderTop: '1px solid #d1d1d1', padding: '0 15px', lineHeight: '100%'}}

*/