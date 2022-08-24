import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function App() {
  let navigate = useNavigate();

  useEffect(() => {
    //navigate('/product');
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
