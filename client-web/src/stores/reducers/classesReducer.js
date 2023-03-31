import { FETCH_CLASS_SUCCESS } from "../action/actionType";

const initialState = {
  classes: [],
};

function classesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CLASS_SUCCESS:
      return { ...state, classes: action.payload };
    default:
      return state;
  }
}

export default classesReducer;
