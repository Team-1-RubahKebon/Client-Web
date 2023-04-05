import {
  FETCH_CLASSID_SUCCESS,
  FETCH_CLASS_SUCCESS,
  LOADING_CLASS,
} from "../action/actionType";

const initialState = {
  classes: [],
  class: {},
  isLoading: true,
};

function classesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CLASS_SUCCESS:
      return { ...state, classes: action.payload };
    case FETCH_CLASSID_SUCCESS:
      return { ...state, class: action.payload };
    case LOADING_CLASS:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export default classesReducer;
