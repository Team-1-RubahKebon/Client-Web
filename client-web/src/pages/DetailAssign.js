import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";
import TableStudentAssign from "../components/table/TableStudentAssign";
import { dateFormat } from "../helpers/formatDate";
import { findAssigmentId } from "../stores/action/assignmentActionCreator";

function DetailAssign() {
  const { id } = useParams();
  const { assignment, isLoading } = useSelector((state) => state?.assignment);
  const dispatch = useDispatch();

  const detailStudentAnswer = (idStudent) => {
    const indexDetail = assignment?.StudentAnswers.findLastIndex(
      (el) => el.Student == idStudent
    );
    const detailData = assignment?.StudentAnswers[indexDetail];
    return detailData;
  };

  const assigned = () => {
    let total = 0;
    assignment?.StudentAnswers.forEach((el) => {
      if (el.status === "Assigned") {
        total++;
      }
    });
    return total;
  };

  const returned = () => {
    let total = 0;
    assignment?.StudentAnswers.forEach((el) => {
      if (el.status === "Returned") {
        total++;
      }
    });
    return total;
  };

  useEffect(() => {
    dispatch(findAssigmentId(id));
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-5 sm:ml-64 h-screen">
          <div className="p-5 border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-16">
            <div className="flex flex-col items-center justify-center h-40 mb-4 rounded drop-shadow-lg bg-white">
              <p className="text-2xl text-gray-800 dark:text-gray-500 font-bold">
                {assignment.name}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-500 font-bold mt-2">
                {assignment.subject}
              </p>
              <div className="flex flex-row mt-2">
                <p className="text-sm text-gray-500 dark:text-gray-500 mr-2">
                  {assignment?.StudentAnswers ? `Assigned : ${assigned()}` : ""}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 ">
                  {assignment?.StudentAnswers ? `Returned : ${returned()}` : ""}
                </p>
              </div>
              <p className="text-base text-gray-500 dark:text-gray-500 font-bold mt-2">
                Deadline : {dateFormat(assignment?.deadline)}
              </p>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name Student
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Turn At
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Score
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {assignment?.ClassId?.Students?.map((assignmen, index) => (
                    <TableStudentAssign
                      key={assignmen._id}
                      assignment={detailStudentAnswer(assignmen._id)}
                      index={index}
                      subject={assignment.subject}
                      student={assignmen}
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
export default DetailAssign;
