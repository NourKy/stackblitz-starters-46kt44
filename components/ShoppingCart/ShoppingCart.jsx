import React from 'react';
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem';

function ShoppingCart({ carts }) {
  console.log(carts)
  return (
    <div>
      <ul>
      <li>
      {carts.map((item, index) => (
        <ShoppingItem key={index} item={item} />
      ))}
      </li></ul>
    </div>
  );
}

export default ShoppingCart;
