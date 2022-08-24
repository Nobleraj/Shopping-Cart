import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import Home from './Home';
import About from './About';
import Product from './Product';

export default function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="product">Product</Link>
          <Link to="about">About</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
