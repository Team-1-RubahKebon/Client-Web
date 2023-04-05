import TableRowClassRoom from "../components/table/TableRowClassRoom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchClass } from "../stores/action/classActionCreator";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";
function Classroom() {
  const navigation = useNavigate();

  const newClassForm = () => {
    navigation("/classroom/form");
  };

  const data = useSelector((state) => state?.classes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClass());
  }, []);

  return (
    <div>
      {data.isLoading ? (
        <Loader />
      ) : (
        <div className="p-5 sm:ml-64">
          <div className="p-5 border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-16">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-900">
                <form>
                  <div className="form-control">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Search…"
                        className="input input-bordered"
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
                <div>
                  <button
                    className="inline-flex items-center btn md:btn-md btn-primary text-white"
                    onClick={newClassForm}
                  >
                    Add New Class
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
                      Name Class
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Student
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Assigment
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.classes.map((clas, index) => (
                    <TableRowClassRoom
                      key={clas._id}
                      clas={clas}
                      index={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Classroom;
