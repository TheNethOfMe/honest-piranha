import { GET_MENU_ITEMS, MENU_LOADING } from "../actions/types";

const initialState = {
  menuItems: null,
  menuLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MENU_LOADING:
      return {
        ...state,
        menuLoading: true
      };
    case GET_MENU_ITEMS:
      return {
        ...state,
        menuLoading: false,
        menuItems: action.payload
      };
    default:
      return state;
  }
}
