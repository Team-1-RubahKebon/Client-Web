import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findClassId } from "../stores/action/classActionCreator";

function DetailClass() {
  const { id } = useParams();
  const data = useSelector((state) => state?.classes);

  const dispatch = useDispatch();

  const total = (value) => {
    return value?.length;
  };

  useEffect(() => {
    dispatch(findClassId(id));
  }, []);

  return (
    <div>
      <div className="p-5 sm:ml-64 ">
        <div className="p-3 mt-14 card bg-primary shadow-xl items-center h-screen">
          <div className="m-auto">
            <div className="bg-base-100 relative flex flex-col items-center rounded-[20px] w-[900px] max-w-[95%] mx-auto shadow-3xl shadow-shadow-500 dark:!shadow-none p-3 drop-shadow-lg">
              <div className="mt-2 mb-8 w-full">
                <h4 className="px-2 text-xl font-bold text-navy-700 ">
                  Detail Class
                </h4>
                <p className="mt-2 px-2 text-base font-medium text-navy-700">
                  Class : {data?.class?.name}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 px-2 w-full">
                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Total Student</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    {total(data?.class?.Students)}
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Total Assisgment</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    {total(data?.class?.Assignments)}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Avarage CLass</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    {data?.class?.classAvg}
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Total Subject</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailClass;
