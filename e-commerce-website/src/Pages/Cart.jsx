import React from 'react';
import './Cart.css'
import CartItem from './CartItem';

function Cart({ cart }) {
  return (
    <div className='cart-container'>
      
      {cart.map((item, index) => (
        <div className='cart-div'>

          <CartItem key={index} item={item} />
        </div>
      ))}
    </div>
  );
}

export default Cart;