import { useNavigate } from "react-router-dom";
import { dateFormat } from "../../helpers/formatDate";

function TableStudentAssign({ assignment, subject, index, student }) {
  const navigation = useNavigate();
  const gotoDetailAssignment = (id) => {
    navigation("/assignment/student/" + id);
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">{++index}.</td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div>
          <div className="text-base font-semibold">{student?.name}</div>
        </div>
      </th>
      <td className="px-6 py-4">
        <div className="flex items-center">
          {assignment?.status ? <p>{assignment?.status}</p> : <p>Assigned</p>}
        </div>
      </td>
      <td className="px-6 py-4">
        {dateFormat(assignment?.turnedAt) ? (
          <p>{dateFormat(assignment?.turnedAt)}</p>
        ) : (
          ""
        )}
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">{assignment?.score}</div>
      </td>
      <td className="px-6 py-4">
        <button
          className="font-medium text-emerald-950 dark:text-emeral-600 hover:underline"
          onClick={() => gotoDetailAssignment(assignment?._id)}
        >
          Detail Answers
        </button>
      </td>
    </tr>
  );
}

export default TableStudentAssign;
