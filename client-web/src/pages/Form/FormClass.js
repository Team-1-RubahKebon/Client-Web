import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createClass } from "../../stores/action/classActionCreator";

function FormClass() {
  const [newClass, setNewClass] = useState({
    name: "",
    schedule: [
      {
        day: "monday",
        subjects: "",
      },
      {
        day: "tuesday",
        subjects: "",
      },
      {
        day: "wednesday",
        subjects: "",
      },
      {
        day: "thursday",
        subjects: "",
      },
      {
        day: "friday",
        subjects: "",
      },
    ],
  });

  const changeInput = (e) => {
    setNewClass({
      ...newClass,
      [e.target.name]: e.target.value,
    });
  };

  const changeSchedule = (e) => {
    const { name, value } = e.target;
    const newSchedule = newClass.schedule.map((item) =>
      item.day === name ? { ...item, subjects: value } : item
    );
    setNewClass({ ...newClass, schedule: newSchedule });
  };

  const handleBack = () => {
    navigation(-1);
  };

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(createClass(newClass));
    navigation("/classroom");
  };

  return (
    <div className="p-5 sm:ml-64">
      <div className="p-3 mt-14 card bg-primary shadow-xl items-center h-screen">
        <div className="py-8 px-4 m-auto w-full max-w-2xl lg:py-16 card bg-base-100 shadow-xl items-center">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new Class
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Class Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Class name"
                required=""
                value={newClass.name}
                onChange={changeInput}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="monday"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                monday
              </label>
              <input
                type="text"
                name="monday"
                id="monday"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="monday"
                required=""
                // value={newClass?.schedule[0]?.subjects}
                onChange={changeSchedule}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="tuesday"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                tuesday
              </label>
              <input
                type="text"
                name="tuesday"
                id="tuesday"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="tuesday"
                required=""
                // value={newClass?.schedule[1]?.subjects}
                onChange={changeSchedule}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="wednesday"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                wednesday
              </label>
              <input
                type="text"
                name="wednesday"
                id="wednesday"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="wednesday"
                required=""
                // value={newClass?.schedule[2]?.subjects}
                onChange={changeSchedule}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="thursday"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                thursday
              </label>
              <input
                type="text"
                name="thursday"
                id="thursday"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="thursday"
                required=""
                // value={newClass?.schedule[3]?.subjects}
                onChange={changeSchedule}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="friday"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                friday
              </label>
              <input
                type="text"
                name="friday"
                id="friday"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="friday"
                required=""
                // value={newClass?.schedule[4]?.subjects}
                onChange={changeSchedule}
              />
            </div>
          </div>
          <div className="mt-5">
            <button className="btn mr-5" onClick={handleBack}>
              Back
            </button>
            <button className="btn" onClick={handlerSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormClass;
