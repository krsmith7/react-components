import React from 'react';
import './Product.css';
import PropTypes from 'prop-types';


// If the discounted price is less than the standard price then the component should display the discounted price with some visual indicator (e.g. the price text is red).

const Product = (props) => {

  return (
    <section className="product">

      <div className="product-photo">
        <img src={props.photoUrl} alt={props.name}>
        </img>
      </div>

      <div className="product-name">
        <strong>{props.name}</strong>
      </div>

      <div className="product-prices">
        <div className="product-price">
          {props.standardPrice}
        </div>

        <div className="product-discount">
          {props.discountPrice}
        </div>
      </div>
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
