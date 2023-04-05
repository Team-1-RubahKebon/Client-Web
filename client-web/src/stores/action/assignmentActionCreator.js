import { API_URL } from "../../config/api";
import {
  FETCH_ASSIGNMENTID_SUCCESS,
  FETCH_ASSIGNMENT_SUCCESS,
  FETCH_STUDENTANSWER_ID_SUCCESS,
  LOADING_ASSIGNMENT,
} from "./actionType";
import axios from "axios";
import { successToast } from "../../helpers/toastNotification";

export const fetchAssignmentAction = (payload) => {
  return {
    type: FETCH_ASSIGNMENT_SUCCESS,
    payload,
  };
};
export const fetchAssignmentIDAction = (payload) => {
  return {
    type: FETCH_ASSIGNMENTID_SUCCESS,
    payload,
  };
};
export const fetchStudentAnswerIDAction = (payload) => {
  return {
    type: FETCH_STUDENTANSWER_ID_SUCCESS,
    payload,
  };
};

export const loadingAssignment = () => {
  return {
    type: LOADING_ASSIGNMENT,
    payload: false,
  };
};

export const fetchAssignments = (query) => {
  return async (dispatch) => {
    try {
      const { name, Class } = query;
      let url = API_URL + "teachers/assignments";
      if (name) {
        url += `?name=${name}`;
      } else if (Class) {
        url += `?Class=${Class}`;
      }
      const { data } = await axios.get(url, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchAssignmentAction(data));
      dispatch(loadingAssignment());
    } catch (error) {
      throw error;
    }
  };
};

export const findAssigmentId = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(API_URL + "teachers/assignments/" + id, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchAssignmentIDAction(data));
    } catch (error) {
      throw error;
    }
  };
};

export const createAssignment = (data) => {
  const { name, subject, ClassId, assignmentDate, deadline, questionForm } =
    data;

  const objQuestion = {
    questions: questionForm,
  };

  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        API_URL + "teachers/assignments",
        {
          name,
          subject,
          ClassId,
          assignmentDate,
          deadline,
          questionForm: objQuestion,
        },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      successToast("Success Add");
      dispatch(fetchAssignments({}));
    } catch (error) {
      throw error;
    }
  };
};

export const fetchStudentAnswer = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        API_URL + "teachers/student/answer/" + id,
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      const idAssignment = data.Assignment._id;
      dispatch(findAssigmentId(idAssignment));
      dispatch(fetchStudentAnswerIDAction(data));
      dispatch(loadingAssignment());
    } catch (error) {
      throw error;
    }
  };
};

export const destroyAssignment = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(API_URL + "teachers/assignments/" + id, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchAssignments({}));
    } catch (error) {
      throw error;
    }
  };
};

export const updateStudentAnswer = (id, data) => {
  let { score, Answers } = data;
  if (score > 98) {
    score = 100;
  }
  console.log(score);
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        API_URL + "teachers/student/answer/" + id,
        {
          newStatus: "Returned",
          newScore: score,
          newAnswer: Answers,
        },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      // const idAssignment = data.Assignment._id;
      // dispatch(findAssigmentId(idAssignment));
      dispatch(fetchStudentAnswer(id));
    } catch (error) {
      throw error;
    }
  };
};
