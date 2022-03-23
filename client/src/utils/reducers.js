import { useReducer } from "react";
import { UPDATE_CART } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // if action type value is the value of UPDATE_PRODUCTS,
    // return a new state object with an updated products array
    case UPDATE_CART:
      return {
        ...state,
        cart: [...state.cart, action.cart],
      };

    // if it's none of these actions, do not update state and all
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
