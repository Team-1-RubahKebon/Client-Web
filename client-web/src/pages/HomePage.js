import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GrafikKelas from "../components/grafik/GrafikKelas";
import { fetchClass } from "../stores/action/classActionCreator";

function HomePage() {
  const classes = useSelector((state) => state?.classes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClass());
  }, []);

  const totalStudent = (value) => {
    let studentTotal = 0;
    value.forEach((el) => (studentTotal += el.Students.length));
    return studentTotal;
  };

  const totalAssigment = (value) => {
    let assignmentTotal = 0;
    value.forEach((el) => (assignmentTotal += el.Assignments.length));
    return assignmentTotal;
  };

  return (
    <div>
      <div className="p-5 sm:ml-64 h-screen">
        <div className="p-5 border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-16">
          <div className="bg-primary flex items-center justify-center h-40 mb-4 rounded drop-shadow-lg">
            <p className="text-2xl text-white dark:text-gray-500 font-bold">
              Dashboard
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary flex items-center justify-center rounded h-96  drop-shadow-lg">
              <p className="text-2xl text-white font-bold">Class</p>
              <GrafikKelas />
            </div>
            <div>
              <div className="bg-primary flex items-center justify-center rounded h-44 mb-8 ">
                <p className="text-2xl text-white dark:text-gray-500">
                  Total Students : {totalStudent(classes.classes)}
                </p>
              </div>
              <div className="bg-primary flex items-center justify-center rounded h-44 ">
                <p className="text-2xl text-white dark:text-gray-500">
                  Total Assignments : {totalAssigment(classes.classes)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
