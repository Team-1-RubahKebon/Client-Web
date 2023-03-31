function DetailClass() {
  return (
    <div>
      <div className="p-5 sm:ml-64 ">
        <div className="p-3 border-2 border-gray-200  rounded-lg dark:border-gray-700 mt-14 ">
          <div className="flex flex-col justify-center items-center mb-5">
            <div
              className="relative flex flex-col items-center rounded-[20px] w-[900px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!shadow-none p-3 drop-shadow-lg"
              style={{ backgroundColor: "#004643" }}
            >
              <div className="mt-2 mb-8 w-full">
                <h4 className="px-2 text-xl font-bold text-navy-700 text-white">
                  Detail Class
                </h4>
                <p className="mt-2 px-2 text-base text-white">
                  Class ini merupakan class 11 ipa 2
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 px-2 w-full">
                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Student</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    Jumlah Student
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Assisgment</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    Jumlah Assigment
                  </p>
                </div>

                <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Avarage CLass</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    Rata - rata Class
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                  <p className="text-sm text-gray-600">Mata Pelajaran</p>
                  <p className="text-base font-medium text-navy-700 dark:text-white">
                    Jumlah Mata Pelajaran
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
