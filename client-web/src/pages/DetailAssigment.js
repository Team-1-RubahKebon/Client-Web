import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchStudentAnswer,
  updateStudentAnswer,
} from "../stores/action/assignmentActionCreator";
import { Modal } from "flowbite-react";
import Loader from "../components/loader/Loader";

function DetailAssigment() {
  const { id } = useParams();
  const { assignment, studentAnswer, isLoading } = useSelector(
    (state) => state?.assignment
  );

  useEffect(() => {
    dispatch(fetchStudentAnswer(id));
  }, []);

  const handleCorrectClick = (i) => {
    const newAnswers = [...studentAnswer.Answers];
    newAnswers[i] = { ...newAnswers[i], isWrong: false };
    let score = studentAnswer.score;
    if (studentAnswer.score == 15) {
      score = 0;
    } else {
      score += 6.667;
    }
    // const Answers = [
    //   {
    //     rowNumber: 1,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 2,
    //     answer: "A",
    //     answerType: "pg",
    //     isWrong: false,
    //   },
    //   {
    //     rowNumber: 3,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 4,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 5,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 6,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 7,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 8,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 9,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 10,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 11,
    //     answer: "B",
    //     answerType: "essay",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 12,
    //     answer: "B",
    //     answerType: "essay",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 13,
    //     answer: "B",
    //     answerType: "essay",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 14,
    //     answer: "B",
    //     answerType: "essay",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 15,
    //     answer: "B",
    //     answerType: "essay",
    //     isWrong: true,
    //   },
    // ];
    dispatch(updateStudentAnswer(id, { Answers: newAnswers, score }));
  };

  const handleWrongClick = (i) => {
    const newAnswers = [...studentAnswer.Answers];
    newAnswers[i] = { ...newAnswers[i], isWrong: true };
    let score = studentAnswer.score;
    if (studentAnswer.score == 0) {
      score = 0;
    } else {
      score -= 6.667;
    }

    // const Answers = [
    //   {
    //     rowNumber: 1,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 2,
    //     answer: "A",
    //     answerType: "pg",
    //     isWrong: false,
    //   },
    //   {
    //     rowNumber: 3,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 4,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 5,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 6,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 7,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 8,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 9,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 10,
    //     answer: "B",
    //     answerType: "pg",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 11,
    //     answer: "B",
    //     answerType: "essay",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 12,
    //     answer: "B",
    //     answerType: "essay",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 13,
    //     answer: "B",
    //     answerType: "essay",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 14,
    //     answer: "B",
    //     answerType: "essay",
    //     isWrong: true,
    //   },
    //   {
    //     rowNumber: 15,
    //     answer: "B",
    //     answerType: "essay",
    //     isWrong: true,
    //   },
    // ];

    dispatch(updateStudentAnswer(id, { Answers: newAnswers, score }));
  };

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [show, setShow] = useState(false);
  const onClick = (e) => {
    setShow(true);
  };

  const onClose = (e) => {
    setShow(false);
  };

  const handlerUpdate = (id) => {
    dispatch(
      updateStudentAnswer(id, {
        score: studentAnswer.score,
        Answers: studentAnswer.Answers,
      })
    );
    navigation("/assignment/" + assignment._id);
  };

  const Panjang = (value) => {
    if (value) {
      return value.length;
    } else {
      return 0;
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-5 sm:ml-64">
          <div className="p-5 mt-16 card bg-primary shadow-xl items-center h-screen">
            <div
              className="m-auto h-screen w-full"
              style={{ overflowY: "auto" }}
            >
              <div className=" mb-2 my-2 w-full bg-base-100 relative flex flex-col rounded-[20px] w-[900px] max-w-[95%] mx-auto shadow-3xl shadow-shadow-500 dark:!shadow-none p-3 drop-shadow-lg">
                <div className="my-2 flex flex-col">
                  <div className="relative">
                    <p className="mt-2 px-2 text-base font-medium text-navy-700 absolute top-0 right-0">
                      Score : {studentAnswer?.score}
                    </p>
                  </div>
                  <h4 className="px-2 text-xl font-bold text-navy-700 ">
                    Assignment : {assignment?.name}
                  </h4>
                  <p className="mt-2 px-2 text-base font-medium text-navy-700">
                    Class : {assignment?.ClassId?.name}
                  </p>
                  <p className="mt-2 px-2 text-base font-medium text-navy-700">
                    Subject : {assignment?.subject}
                  </p>
                  <p className="mt-2 px-2 text-base font-medium text-navy-700">
                    Student Name : {studentAnswer?.Student?.name}
                  </p>

                  <div className="relative">
                    <button
                      className="btn btn-warning bg-amber-600 absolute bottom-0 right-0"
                      onClick={onClick}
                    >
                      Image Answer
                    </button>
                  </div>

                  <Modal show={show} onClose={onClose}>
                    <Modal.Header className="mt-10">Answer</Modal.Header>
                    <div className="flex items-center justify-center">
                      <img
                        src={studentAnswer?.imgUrl}
                        alt="Student"
                        className="h-screen"
                        style={{ width: 500 }}
                      />
                    </div>
                  </Modal>
                </div>
              </div>
              <div className="mb-2 grid grid-cols-2 gap-4 mx-3">
                {assignment?.QuestionId?.questions?.map((el, i) => (
                  <div
                    className="mt-2 bg-base-100 relative flex flex-col rounded-[20px] w-[900px] max-w-[95%] mx-auto shadow-3xl shadow-shadow-500 dark:!shadow-none p-3 drop-shadow-lg"
                    key={el._id}
                  >
                    <div className="my-2 flex flex-col p-2">
                      <div className="flex justify-end">
                        <p>No : {1 + i}</p>
                      </div>
                      <div className="relative bottom-6">
                        <h4 className="text-xl font-bold text-navy-700 ">
                          Que : {el?.question}
                        </h4>
                        <p className="mt-2 text-base font-medium text-navy-700">
                          Ans : {el?.keyword}
                        </p>
                        <p className="mt-2 text-base font-medium text-navy-700">
                          {Panjang(studentAnswer.Answers) == 0
                            ? "Student Answer : "
                            : `Student Answer : ${studentAnswer.Answers[i]?.answer}`}
                        </p>
                      </div>
                      {Panjang(studentAnswer.Answers) == 0 ? (
                        ""
                      ) : (
                        <>
                          <p className="mt-2 text-base font-medium text-navy-700">
                            {studentAnswer.Answers[i] &&
                            studentAnswer.Answers[i].isWrong ? (
                              <span className="text-error-600">
                                Wrong Answer
                              </span>
                            ) : (
                              <span className="text-success-600">
                                Correct Answer
                              </span>
                            )}
                          </p>
                          <div className="relative">
                            {studentAnswer.Answers[i] &&
                            studentAnswer.Answers[i].isWrong ? (
                              <button
                                className="btn btn-error absolute bottom-0 right-0"
                                onClick={() => handleCorrectClick(i)}
                              >
                                Wrong
                              </button>
                            ) : (
                              <button
                                className="btn btn-success absolute bottom-0 right-0"
                                onClick={() => handleWrongClick(i)}
                              >
                                Correct
                              </button>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {assignment?.Answers?.map((student) => (
                <div
                  className="w-full mt-2 bg-base-100 relative flex flex-row justify-between rounded-[20px] w-[900px] max-w-[95%] mx-auto shadow-3xl shadow-shadow-500 dark:!shadow-none p-3 drop-shadow-lg"
                  key={student._id}
                >
                  <div className="my-2">
                    Student Name
                    <p>Answer: {student?.Answers[0]?.answer}</p>{" "}
                  </div>
                  <div className="my-2"></div>

                  <button className="btn" onClick={onClick}>
                    Image Answer
                  </button>
                  <Modal show={show} onClose={onClose}>
                    <Modal.Header className="mt-10">Answer</Modal.Header>
                    <div className="flex items-center justify-center">
                      <img
                        src={student?.imgUrl}
                        alt="Student"
                        className="h-screen"
                        style={{ width: 500 }}
                      />
                    </div>
                  </Modal>
                </div>
              ))}
              <div className="flex justify-end p-2 mr-3">
                <button
                  className="btn bg-emerald-800 btn-success btn-active mt-2"
                  onClick={() => handlerUpdate(studentAnswer?._id)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailAssigment;
