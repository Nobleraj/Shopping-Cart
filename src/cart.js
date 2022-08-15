import React from 'react';

const Cart = ({ state, dispatch }) => {
  const cart = state.cart;

  const addRemoveQty = (id, flag) => {
    dispatch({
      type: 'ADD_REMOVE_QTY',
      payload: {
        flag,
        id,
      },
    });
  };

  return (
    <div className="cart">
      <h3>Total Price</h3>
      <span className="total-price">
        $
        {cart
          .map((val) => val.price * val.qty)
          .reduce((acc, crr) => acc + crr, 0)}
      </span>
      {cart.map((itm) => {
        return (
          <div key={itm.id} className="cart-itm">
            <img alt={itm.title} src={itm.thumbnail} />
            <div className="cart-container">
              <span>{itm.title}</span>
              <span className="price">${itm.price}</span>
              <div className="cart-action">
                <button onClick={() => addRemoveQty(itm.id, false)}>-</button>
                <span className="qty">{itm.qty}</span>
                <button onClick={() => addRemoveQty(itm.id, true)}>+</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
