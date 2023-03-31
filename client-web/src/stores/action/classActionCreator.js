import { API_URL } from "../../config/api";
import { FETCH_CLASS_SUCCESS } from "./actionType";
import axios from "axios";

export const fetchClassAction = (payload) => {
  return {
    type: FETCH_CLASS_SUCCESS,
    payload,
  };
};

export const fetchClass = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(API_URL + "teachers/class");
      dispatch(fetchClassAction(data));
    } catch (error) {
      throw error;
    }
  };
};
