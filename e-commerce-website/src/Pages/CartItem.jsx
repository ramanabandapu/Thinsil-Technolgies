
import React from 'react';

function CartItem({item} ) {
    console.log(item)
  return (
    <div>
        <img src={item.image}></img>
      <p>Title : {item.title}</p>
      <p>Price : {item.price}</p>
    </div>
  );
}

export default CartItem;
