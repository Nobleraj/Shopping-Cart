import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function App() {
  let navigate = useNavigate();
  return (
    <div className="about">
      About Page
      <button
        onClick={() => {
          navigate('/product', { replace: false });
          navigate('/product', { replace: false });
        }}
      >
        Product
      </button>
    </div>
  );
}
