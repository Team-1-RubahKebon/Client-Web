import TableRowClassRoom from "../components/table/TableRowClassRoom";

function TaskPage() {
  return (
    <div>
      <div className="p-5 sm:ml-64">
        <div className="p-3 border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
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
                    <button className="btn btn-square">
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
                  <select className="select select-bordered md:select-md ">
                    <option disabled selected>
                      Select by class
                    </option>
                    <option>12 IPA 1</option>
                    <option>12 IPA 2</option>
                    <option>12 IPA 3</option>
                  </select>
                  <button className="btn">Go</button>
                </div>
              </div>
              <div>
                <button className="inline-flex items-center btn  md:btn-md ">
                  Add New Task
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
            <div className="flex justify-center">
              <div className="btn-group">
                <button className="btn">«</button>
                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn btn-disabled">...</button>
                <button className="btn">99</button>
                <button className="btn">100</button>
                <button className="btn">»</button>
              </div>
              {/* The button to open modal */}
              <label htmlFor="my-modal-6" className="btn">
                open modal
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    Congratulations random Internet user!
                  </h3>
                  <p className="py-4">
                    You've been selected for a chance to get one year of
                    subscription to use Wikipedia for free!
                  </p>
                  <div className="modal-action">
                    <label htmlFor="my-modal-6" className="btn">
                      Yay!
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
