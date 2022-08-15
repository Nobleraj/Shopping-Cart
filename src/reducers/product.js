const product = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((val) => val.id !== action.payload),
      };
    case 'ADD_REMOVE_QTY':
      let { flag, id } = action.payload;
      let tempCart = [...state.cart];
      let ind = tempCart.findIndex((indx) => indx.id == id);
      tempCart[ind].qty = flag
        ? tempCart[ind].qty + 1
        : tempCart[ind].qty > 1
        ? tempCart[ind].qty - 1
        : tempCart[ind].qty;
      return { ...state, cart: tempCart };
    default:
      return state;
  }
};
export default product;
