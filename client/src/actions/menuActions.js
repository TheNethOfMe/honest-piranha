import axios from "axios";

import { GET_MENU_ITEMS, MENU_LOADING } from "./types";

export const getMenu = () => dispatch => {
  dispatch(setMenuLoading());
  axios.get("/api/menu").then(res => {
    dispatch({
      type: GET_MENU_ITEMS,
      payload: res.data
    });
  });
};

export const setMenuLoading = () => {
  return {
    type: MENU_LOADING
  };
};
