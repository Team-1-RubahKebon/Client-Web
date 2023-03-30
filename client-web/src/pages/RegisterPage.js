import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/api";

function RegisterPage() {
  const navigation = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const changeInputHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!userData.name || !userData.email || !userData.password) {
        const error = { message: "All inputs are required" };
        throw error;
      }

      console.log(userData.name, userData.email, userData.password);

      const { data } = await axios.post(API_URL + "teachers/register", {
        email: userData.email,
        password: userData.password,
      });

      navigation("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-purple-800/50 lg:max-w-md">
        <h1 className="text-3xl font-semibold text-center text-purple-700">
          <i>Class</i>Mate
        </h1>

        <form className="mt-6" onSubmit={handlerSubmit}>
          <div className="mt-4">
            <label htmlFor="username" className="block text-sm text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              name="name"
              value={userData.name}
              onChange={changeInputHandler}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block text-sm text-gray-800">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={changeInputHandler}
              name="email"
              value={userData.email}
            />
          </div>

          <div className="mt-4">
            <div>
              <label htmlFor="password" className="block text-sm text-gray-800">
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={changeInputHandler}
                name="password"
                value={userData.password}
              />
            </div>

            <div className="mt-6">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                type="submit"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
