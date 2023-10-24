// CartPage.jsx
import React, { useState } from 'react';
import Productpage from './Productpage';
import Cart from './Cart';

function CartPage({id, image, title, price }) {
  const [cart, setCart] = useState([]);

  const addToCart = (id,image,title,price) => {
    const item = {id,image,title,price}
    console.log(item)
    setCart([...cart, item]);
  };

  return (
    <div>
      <h1>Product Page</h1>
      {/* <Productpage id={1} name="Product 1" price={10.99} addToCart={addToCart} /> */}
      <Productpage id={id} image={image} title={title} price={price}  addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default CartPage;
