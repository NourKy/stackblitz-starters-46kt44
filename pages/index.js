'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Form from '../components/Forms/Forms';
import ShoppingList from '../components/ShoppingList/ShoppingList';

import ShoppingCart from '../components/ShoppingCart/ShoppingCart';

export default function Home() {
  const [cart, setCart] = useState([`aa`]);

  function addItemCart(newItem) {
    setCart((prevState) => {
      const copyPrevState = [...prevState];
      copyPrevState.push(newItem);
      return copyPrevState;
    });
  }
  return (
    <div style={{ width: '100vw' }}>
      <Head>
        <title>Create Next App</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
      </Head>
      <div className="card">
        <Form onItemAdded={addItemCart} />
        <ShoppingCart carts={cart} />
        <ShoppingList />
      </div>
    </div>
  );
}
