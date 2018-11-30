import React from 'react';
import Product from './Product';
// import data from '../data/products.json';

const ProductList = () => {
  const data = [
    {
      "name": "Mermaid Comforter",
      "photo": "https://linenstar.co.uk/wp-content/uploads/2017/11/Mermaid-duvet.jpg",
      "price": 79.99,
      "discounted": 45.99
    },
    {
      "name": "Zombie Mug Set",
      "photo": "http://media.gadgetsin.com/2016/01/the_zombie_mugs_show_off_realistic_and_creepy_detailing_1.jpg",
      "price": 49.50,
      "discounted": 49.50
    },
    {
      "name": "Unicorn Onesie",
      "photo": "https://www.kigu.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/a/rainbow-main.jpg",
      "price": 59.69,
      "discounted": 55.99
    }
  ];


  const productCollection = data.map((product, i) => {
  return <Product key={i} name={product.name} photoUrl={product.photo} standardPrice={product.price} discountPrice ={product.discounted} />
  });

  return (
    <section>
      {productCollection}
    </section>
  );


};

export default ProductList;
