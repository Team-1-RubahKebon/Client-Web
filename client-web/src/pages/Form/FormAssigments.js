import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuestionEssay from "../../components/questions/QuestionEssay";
import QuestionPg from "../../components/questions/QuestionPg";
import { createAssignment } from "../../stores/action/assignmentActionCreator";
import { fetchClass } from "../../stores/action/classActionCreator";

function FormAssigment() {
  const [assig, setAssig] = useState({
    name: "",
    subject: "",
    ClassId: "",
    assignmentDate: "",
    deadline: "",
    questionForm: [],
  });

  const changeInput = (e) => {
    setAssig({
      ...assig,
      [e.target.name]: e.target.value,
    });
  };

  const [soal, setSoal] = useState(0);

  const handleNextSoal = () => {
    setSoal(soal + 11);
  };

  const handleNext = (data) => {
    if (soal < 15) {
      setSoal(soal + 1);
    }
    if (soal > 0) {
      const index = assig.questionForm.findIndex(
        (item) => item.rowNumber === data.rowNumber
      );
      if (index === -1) {
        setAssig({
          ...assig,
          questionForm: [...assig.questionForm, data],
        });
      } else {
        const questionForm = [...assig.questionForm];
        questionForm[index] = data;
        setAssig({
          ...assig,
          questionForm,
        });
      }
    }
  };

  const handleBack = () => {
    setSoal(soal - 1);
  };

  const navigation = useNavigate();
  const handlerSubmit = (e, lastQuestion) => {
    e.preventDefault();
    assig.questionForm.push(lastQuestion);
    dispatch(createAssignment(assig));
    navigation("/assignment");
  };

  const { classes } = useSelector((state) => state?.classes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClass());
  }, []);

  return (
    <div className="p-5 sm:ml-64">
      <div className="p-3 mt-14 card bg-primary shadow-xl items-center h-screen">
        {soal === 0 && (
          <div className="py-8 px-4 m-auto w-full max-w-2xl lg:py-16 card bg-base-100 shadow-xl items-center">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Add a new Assignment
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Assignment Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Assignment name"
                  required=""
                  value={assig.name}
                  onChange={changeInput}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Subject Assignment"
                  required=""
                  value={assig.subject}
                  onChange={changeInput}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="Class"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Class
                </label>
                <select
                  className="select-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  defaultValue=""
                  onChange={changeInput}
                  required=""
                  id="Class"
                  name="ClassId"
                >
                  <option value="" disabled>
                    Select Class
                  </option>
                  {classes?.map((clas) => (
                    <option value={clas?._id} key={clas?._id}>
                      {clas?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="assignmentDate"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Assignment Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    id="assignmentDate"
                    name="assignmentDate"
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                    onChange={changeInput}
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="deadline"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Deadline
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    id="deadline"
                    name="deadline"
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                    onChange={changeInput}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <button className="btn btn-primary" onClick={handleNextSoal}>
                Next
              </button>
            </div>
          </div>
        )}
        {/* {Array.from({ length: 10 }).map((_, index) => {
          const currentSoal = index + 1;
          return (
            soal === currentSoal && (
              <QuestionPg
                key={index}
                handleNext={handleNext}
                soal={soal}
                handleBack={handleBack}
                handlerSubmit={handlerSubmit}
                questForm={assig.questionForm[currentSoal - 1]}
              />
            )
          );
        })} */}
        {Array.from({ length: 6 }).map((_, index) => {
          const currentSoal = index + 11;
          return (
            soal === currentSoal && (
              <QuestionEssay
                key={index}
                handleNext={handleNext}
                soal={soal}
                handleBack={handleBack}
                handlerSubmit={handlerSubmit}
                questForm={assig.questionForm[currentSoal - 1]}
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default FormAssigment;
