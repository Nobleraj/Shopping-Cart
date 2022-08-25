import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function App() {
  let navigate = useNavigate();
  let random = Math.round(Math.random() * 5);

  useEffect(() => {
    console.log('val', random);
    if (random >= 1) {
      //navigate('/product');
    }
  }, []);

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
