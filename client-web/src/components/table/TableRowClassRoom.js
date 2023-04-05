import { useNavigate } from "react-router-dom";

function TableRowClassRoom({ clas, index }) {
  const navigation = useNavigate();

  const gotoDetailClass = (id) => {
    navigation("/classroom/" + id);
  };

  const totalAssignment = (assign) => {
    return assign.length;
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">{++index}.</td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div>
          <div className="text-base font-semibold">{clas?.name}</div>
        </div>
      </th>
      <td className="px-6 py-4">{totalAssignment(clas?.Students)}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          {totalAssignment(clas?.Assignments)}
        </div>
      </td>
      <td className="px-6 py-4">
        <button
          className="font-medium text-emerald-950 dark:text-emeral-600 hover:underline"
          onClick={() => gotoDetailClass(clas?._id)}
        >
          Detail Class
        </button>
      </td>
    </tr>
  );
}

export default TableRowClassRoom;
