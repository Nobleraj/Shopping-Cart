import React, { useState, useReducer, useEffect, useCallback } from 'react';
import './style.css';
import axios from 'axios';
import productReducer from './reducers/product';
import Product from './product';
import Cart from './cart';

export default function App() {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    cart: [],
  });

  const api = useCallback(async () => {
    const { data } = await axios.get('https://dummyjson.com/products');
    dispatch({
      type: 'GET_PRODUCTS',
      payload: data.products,
    });
  }, []);

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="main">
      <div className="product-wrapper">
        <Product state={state} dispatch={dispatch} />
      </div>
      <div className="cart-wrapper">
        <Cart state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}
