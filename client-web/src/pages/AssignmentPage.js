import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";
import TableRowAssignment from "../components/table/TableRowAssignment";
import { fetchAssignments } from "../stores/action/assignmentActionCreator";
import { fetchClass } from "../stores/action/classActionCreator";

function AssignmentPage() {
  const { assignments, isLoading } = useSelector((state) => state?.assignment);
  const { classes } = useSelector((state) => state?.classes);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [inputQuery, setInputQuery] = useState({ Class: "", name: "" });

  const changeInput = (e) => {
    setInputQuery({ ...inputQuery, [e.target.name]: e.target.value });
  };

  const handlerSubmitSearch = (e) => {
    e.preventDefault();
    const objsearch = {
      name: inputQuery.name,
      Class: "",
    };
    dispatch(fetchAssignments(objsearch));
  };

  const handlerSelect = (e) => {
    e.preventDefault();
    const objselect = {
      Class: inputQuery.Class,
      name: "",
    };
    dispatch(fetchAssignments(objselect));
  };

  useEffect(() => {
    dispatch(fetchClass());
    dispatch(fetchAssignments(inputQuery));
  }, []);

  const gotoFormAssignment = () => {
    navigation("/assignment/form");
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-5 sm:ml-64 h-screen">
          <div className="p-5 border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-16">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-900">
                <form onSubmit={handlerSubmitSearch}>
                  <div className="form-control">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Search…"
                        className="input input-bordered"
                        onChange={changeInput}
                        value={inputQuery.name}
                        name="name"
                      />
                      <button className="btn btn-square btn-primary text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="form-control">
                  <div className="input-group">
                    <select
                      className="select select-bordered md:select-md"
                      onChange={changeInput}
                      value={inputQuery.Class}
                      name="Class"
                    >
                      <option value="">All</option>
                      {classes.map((el) => (
                        <option value={el._id} key={el._id}>
                          {el.name}
                        </option>
                      ))}
                    </select>
                    <button
                      className="btn btn-primary text-white"
                      onClick={handlerSelect}
                    >
                      Go
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    className="inline-flex items-center btn btn-primary md:btn-md text-white"
                    onClick={gotoFormAssignment}
                  >
                    Add New Assignment
                  </button>
                </div>
              </div>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name Assignment
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Assignment Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Class
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {assignments?.map((assignment, index) => (
                    <TableRowAssignment
                      key={assignment?._id}
                      assignment={assignment}
                      index={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end mt-5">
              <div className="btn-group">
                <button className="btn btn-primary">«</button>
                <button className="btn btn-primary text-white">1</button>
                <button className="btn btn-primary">»</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default AssignmentPage;
