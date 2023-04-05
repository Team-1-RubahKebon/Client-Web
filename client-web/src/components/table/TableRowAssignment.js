import { useNavigate } from "react-router-dom";
import { dateFormat } from "../../helpers/formatDate";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { destroyAssignment } from "../../stores/action/assignmentActionCreator";
function TableRowAssignment({ assignment, index }) {
  const navigation = useNavigate();

  const gotoDetailAssignment = (id) => {
    navigation("/assignment/" + id);
  };

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(destroyAssignment(id));
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">{++index}.</td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div>
          <div className="text-base font-semibold">{assignment?.name}</div>
        </div>
      </th>
      <td className="px-6 py-4">{dateFormat(assignment?.assignmentDate)}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">{assignment?.ClassId?.name}</div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center">{assignment?.subject}</div>
      </td>
      <td className="px-6 py-4 flex justify-between">
        <button
          className="font-medium text-emerald-950 dark:text-emeral-600 hover:underline"
          onClick={() => gotoDetailAssignment(assignment?._id)}
        >
          Detail Assignment
        </button>
        <button onClick={() => handleDelete(assignment?._id)}>
          <MdDelete style={{ color: "red" }} />
        </button>
      </td>
    </tr>
  );
}

export default TableRowAssignment;
