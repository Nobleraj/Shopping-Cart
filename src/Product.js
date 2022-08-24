import React, { useState, useReducer, useEffect, useCallback } from 'react';
import './style.css';
import axios from 'axios';
import productReducer from './reducers/product';
import Product from './components/product';
import Cart from './components/cart';
import { useNavigate } from 'react-router-dom';

export default function App() {
  let navigate = useNavigate();

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
    <div className="prd">
      <button
        className="fake-btn"
        onClick={() => {
          navigate('/product', { replace: false });
        }}
      >
        Product
      </button>
      <div className="product-wrapper">
        <Product state={state} dispatch={dispatch} />
      </div>
      <div className="cart-wrapper">
        <Cart state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}
