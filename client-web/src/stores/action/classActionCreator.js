import { API_URL } from "../../config/api";
import {
  FETCH_CLASSID_SUCCESS,
  FETCH_CLASS_SUCCESS,
  LOADING_CLASS,
} from "./actionType";
import axios from "axios";
import { successToast } from "../../helpers/toastNotification";

export const fetchClassAction = (payload) => {
  return {
    type: FETCH_CLASS_SUCCESS,
    payload,
  };
};
export const fetchClassIdAction = (payload) => {
  return {
    type: FETCH_CLASSID_SUCCESS,
    payload,
  };
};

export const loadingClass = () => {
  return {
    type: LOADING_CLASS,
    payload: false,
  };
};

export const fetchClass = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(API_URL + "teachers/class", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchClassAction(data));
      dispatch(loadingClass());
    } catch (error) {
      throw error;
    }
  };
};

export const createClass = (data) => {
  return async (dispatch) => {
    const { name, schedule } = data;

    try {
      await axios.post(
        API_URL + "teachers/class",
        {
          name,
          schedule,
        },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      successToast("Success Add");
      dispatch(fetchClass());
    } catch (error) {
      throw error;
    }
  };
};

export const findClassId = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(API_URL + "teachers/class/" + id, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchClassIdAction(data));
    } catch (error) {
      throw error;
    }
  };
};
