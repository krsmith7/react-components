import React from 'react';
import Product from './Product';
// import data from '../data/products.json';

const ProductList = () => {
  const data = [
    {
      "name": "Creature from the Black Lagoon",
      "photo": "http://collectingclassicmonsters.com/wp-content/uploads/2015/11/Creature-from-blac-lagoon-one-seet.jpg",
      "price": 34.56,
      "discounted": 25.99
    },
    {
      "name": "Barbarella",
      "photo": "http://ayay.co.uk/backgrounds/movie_posters/sci_fi/BARBARELLA-2.jpg",
      "price": 49.50,
      "discounted": 49.50
    },
    {
      "name": "World of the Gods",
      "photo": "http://www.stayinwonderland.com/wp-content/uploads/03_World-Of-The-Gods.jpg",
      "price": 59.69,
      "discounted": 45.69
    }
  ];


  const productCollection = data.map((product, i) => {
  return <Product key={i} name={product.name} photoUrl={product.photo} standardPrice={product.price} discountPrice ={product.discounted} />
  });

  return (
    <section className="product-list">
      {productCollection}
    </section>
  );


};

export default ProductList;
