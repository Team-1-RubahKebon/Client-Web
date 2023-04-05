import { useEffect, useState } from "react";

function QuestionPg({
  handleNext,
  soal,
  handleBack,
  questForm,
  handlerSubmit,
}) {
  const [quest, setQuestion] = useState({
    rowNumber: soal,
    question: "",
    answerType: "pg",
    keyword: "",
    selection: {
      A: "",
      B: "",
      C: "",
      D: "",
    },
  });

  // console.log(quest);

  useEffect(() => {
    if (questForm) {
      setQuestion(questForm);
    }
  }, [questForm]);

  const changeInput = (e) => {
    setQuestion({
      ...quest,
      [e.target.name]: e.target.value,
    });
  };

  const changeInputOpsi = (e) => {
    setQuestion({
      ...quest,
      selection: {
        ...quest.selection,
        [e.target.name]: e.target.value,
      },
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
        <div className="w-full">
          <label
            htmlFor="A"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Jawaban A
          </label>
          <input
            type="text"
            name="A"
            id="A"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Opsi A"
            required=""
            value={quest?.selection?.A}
            onChange={changeInputOpsi}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="B"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Jawaban B
          </label>
          <input
            type="text"
            name="B"
            id="B"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Opsi B"
            required=""
            value={quest?.selection?.B}
            onChange={changeInputOpsi}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="C"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Jawaban C
          </label>
          <input
            type="text"
            name="C"
            id="C"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Opsi C"
            required=""
            value={quest?.selection?.C}
            onChange={changeInputOpsi}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="D"
            className="block mb-2 font-medium text-gray-900 dark:text-white"
          >
            Jawaban D
          </label>
          <input
            type="text"
            name="D"
            id="D"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Opsi D"
            required=""
            value={quest?.selection?.D}
            onChange={changeInputOpsi}
          />
        </div>
        <div className="sm:col-span-2 mt-5">
          <select
            className="select w-full select-bordered bg-white"
            onChange={changeInput}
            name="keyword"
            value={quest?.keyword}
            required
          >
            <option disabled value="">
              Keyword option
            </option>
            <option value="A">{quest?.selection.A}</option>
            <option value="B">{quest?.selection.B}</option>
            <option value="C">{quest?.selection.C}</option>
            <option value="D">{quest?.selection.D}</option>
          </select>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <button className="btn mr-2 btn-secondary" onClick={handleBack}>
          Back
        </button>
        <button className="btn btn-primary" onClick={questionSubmit}>
          Next
        </button>
      </div>
    </div>
  );
}

export default QuestionPg;
