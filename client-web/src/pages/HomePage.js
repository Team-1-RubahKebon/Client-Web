import GrafikKelas from "../components/grafik/GrafikKelas";

function HomePage() {
  return (
    <div>
      <div className="p-5 sm:ml-64 h-screen">
        <div className="p-3 border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-14">
          <div
            className="flex items-center justify-center h-40 mb-4 rounded drop-shadow-lg"
            style={{ backgroundColor: "#004643" }}
          >
            <p className="text-2xl text-white dark:text-gray-500 font-bold">
              Dashboard
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div
              className="flex items-center justify-center rounded h-96  drop-shadow-lg"
              style={{ backgroundColor: "#004643" }}
            >
              <p className="text-2xl text-white font-bold">Class</p>
              <GrafikKelas />
            </div>
            <div>
              <div
                className="flex items-center justify-center rounded h-44 mb-8 "
                style={{ backgroundColor: "#004643" }}
              >
                <p className="text-2xl text-white dark:text-gray-500">+</p>
              </div>
              <div
                className="flex items-center justify-center rounded h-44 "
                style={{ backgroundColor: "#004643" }}
              >
                <p className="text-2xl text-white dark:text-gray-500">+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
