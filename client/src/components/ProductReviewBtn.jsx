import React from 'react';
import { ReviewProduct, Text, ReviewProductBtn } from './styles/Styles.jsx';

const ProductReviewBtn = () => {
  return (
    <div>
      <ReviewProduct>Review this product</ReviewProduct>
      <Text>Share your thoughts with other customers</Text>
      <ReviewProductBtn>Write a customer review</ReviewProductBtn>
    </div>
  );
};

export default ProductReviewBtn;
