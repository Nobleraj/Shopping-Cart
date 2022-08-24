import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function App() {
  let navigate = useNavigate();
  return (
    <div className="home">
      Home Page
      <button
        onClick={() => {
          navigate('/product');
        }}
      >
        Product
      </button>
    </div>
  );
}
