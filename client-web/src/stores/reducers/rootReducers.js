import { combineReducers } from "redux";
import assignmentReducer from "./assignmentReducer";
import classesReducer from "./classesReducer";
import studentAnswerReducer from "./studentAnswers";
import teacherReducer from "./techersReducers";

const rootReducers = combineReducers({
  teacher: teacherReducer,
  studentAnswer: studentAnswerReducer,
  classes: classesReducer,
  assignment: assignmentReducer,
});

export default rootReducers;
