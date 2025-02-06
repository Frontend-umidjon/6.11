export const initialState = JSON.parse(localStorage.getItem('store')) || {
  count: 0,
  wishlist: [],
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "TOGGLE_LIKE":
      let index = state.wishlist.findIndex(item => item.id === payload.id);
      let result;
      if (index < 0) {
        result = { ...state, wishlist: [...state.wishlist, payload] };
      } else {
        result = { ...state, wishlist: state.wishlist.filter(({ id }) => id !== payload.id) };
      }
      localStorage.setItem('store', JSON.stringify(result));
      return result;

    default:
      return state;
  }
};