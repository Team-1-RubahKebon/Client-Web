import {
  FETCH_ASSIGNMENTID_SUCCESS,
  FETCH_ASSIGNMENT_SUCCESS,
  FETCH_STUDENTANSWER_ID_SUCCESS,
  LOADING_ASSIGNMENT,
} from "../action/actionType";

const initialState = {
  assignments: [],
  assignment: {},
  studentAnswer: {},
  isLoading: true,
};

function assignmentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ASSIGNMENT_SUCCESS:
      return { ...state, assignments: action.payload };
    case FETCH_ASSIGNMENTID_SUCCESS:
      return { ...state, assignment: action.payload };
    case FETCH_STUDENTANSWER_ID_SUCCESS:
      return { ...state, studentAnswer: action.payload };
    case LOADING_ASSIGNMENT:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export default assignmentReducer;
