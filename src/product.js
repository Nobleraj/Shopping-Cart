import React from 'react';

const Product = ({ state, dispatch }) => {
  const products = state.products;
  const cart = state.cart;

  const addTocart = (itm) => {
    const { title, price, thumbnail, id } = itm;

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        title,
        price,
        thumbnail,
        id,
        qty: 1,
      },
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
  };

  return (
    <div className="product">
      {products.map((itm) => {
        return (
          <div key={itm.id} className="prd-itm">
            <img src={itm.thumbnail} />
            <div className="prd-header">
              <span className="title">{itm.title}</span>
              <span className="price">${itm.price}</span>
            </div>
            {cart.some((val) => val.id == itm.id) ? (
              <button className="remove" onClick={() => removeFromCart(itm.id)}>
                Remove from Cart
              </button>
            ) : (
              <button className="addTo" onClick={() => addTocart(itm)}>
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Product;
