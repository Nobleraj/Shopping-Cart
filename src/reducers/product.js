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
      let { qty, id } = action.payload;
      return {
        ...state,
        cart: state.cart.filter((val) =>
          val.id === id ? (val.qty = qty) : val.qty
        ),
      };
    default:
      return state;
  }
};
export default product;
