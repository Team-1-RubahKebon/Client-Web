import { useNavigate } from "react-router-dom";

function TableRowClassRoom() {
  const navigation = useNavigate();

  const gotoDetailClass = () => {
    navigation("/detail_class");
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">1.</td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div>
          <div className="text-base font-semibold">Neil Sims</div>
          <div className="font-normal text-gray-500">
            neil.sims@flowbite.com
          </div>
        </div>
      </th>
      <td className="px-6 py-4">React Developer</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
          Online
        </div>
      </td>
      <td className="px-6 py-4">
        <button
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          onClick={gotoDetailClass}
        >
          Detail Class
        </button>
      </td>
    </tr>
  );
}

export default TableRowClassRoom;
