import React from 'react';
import './Product.css';
import PropTypes from 'prop-types';

// Product
// - takes name
// - takes a product photo URL
// - takes a standard price
// - a discount price.

// If the discounted price is less than the standard price then the component should display the discounted price with some visual indicator (e.g. the price text is red).

const Product = (props) => {
  return (
    <section className="product">
      <div>{props.name}</div>
      <div>{props.photoUrl}</div>
      <div>{props.standardPrice}</div>
      <div>{props.discountPrice}</div>
    </section>
  );
};


Product.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  standardPrice: PropTypes.number,
  discountPrice: PropTypes.number,
};

export default Product;
