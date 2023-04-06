import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/api";
import { errorToast, successToast } from "../helpers/toastNotification";

function LoginPage() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
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
      if (!userData.email || !userData.password) {
        const error = { message: "All inputs are required" };
        throw error;
      }

      const { data } = await axios.post(API_URL + "teachers/login", {
        email: userData.email,
        password: userData.password,
      });

      localStorage.setItem("access_token", data?.access_token);
      successToast("Success Login");
      navigation("/");
    } catch (error) {
      errorToast(error?.response.data.message);
    }
  };

  const navigation = useNavigate();

  const gotoRegister = () => {
    navigation("/register");
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 lg:max-w-md">
        <h1 className="text-3xl font-semibold text-center text-emerald-800">
          <i>Class</i>Mate
        </h1>

        <form className="mt-6" onSubmit={handlerSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-800">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-emerald-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                className="block w-full px-4 py-2 mt-2 text-emerald-800 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="password"
                onChange={changeInputHandler}
                value={userData.password}
              />
            </div>

            <div className="mt-6">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md  focus:outline-none "
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <button
            className="font-medium text-teal-800 hover:underline"
            onClick={gotoRegister}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
