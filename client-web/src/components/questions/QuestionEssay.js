import { useEffect, useState } from "react";

function QuestionEssay({
  handleNext,
  soal,
  handleBack,
  questForm,
  handlerSubmit,
}) {
  const [quest, setQuestion] = useState({
    rowNumber: soal,
    question: "",
    answerType: "essay",
    keyword: "",
  });

  // console.log(questForm);

  // useEffect(() => {
  //   if (!questForm) {
  //     setQuestion(questForm);
  //   }
  // }, [questForm]);

  const changeInput = (e) => {
    setQuestion({
      ...quest,
      [e.target.name]: e.target.value,
    });
  };

  const questionSubmit = () => {
    handleNext(quest);
  };

  return (
    <div className="py-8 px-4 m-auto w-full max-w-2xl lg:py-16 bg-base-100 shadow-xl card first-line:items-center">
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label
            htmlFor="Question"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Question
          </label>
          <textarea
            id="Question"
            rows="5"
            className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Your Question here"
            name="question"
            value={quest?.question}
            onChange={changeInput}
          ></textarea>
        </div>
        <div className="sm:col-span-2 mt-5">
          <label
            htmlFor="Keyword"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Keyword
          </label>
          <input
            type="text"
            name="keyword"
            id="Keyword"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Keyword"
            required=""
            value={quest?.keyword}
            onChange={changeInput}
          />
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <button className="btn mr-2 btn-secondary" onClick={handleBack}>
          Back
        </button>
        {soal == 15 ? (
          <button className="btn" onClick={(e) => handlerSubmit(e, quest)}>
            Submit
          </button>
        ) : (
          <button className="btn btn-primary" onClick={questionSubmit}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestionEssay;
