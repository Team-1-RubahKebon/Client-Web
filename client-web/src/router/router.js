import { createBrowserRouter, redirect } from "react-router-dom";
import LayoutNavSid from "../components/LayoutNavSid";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Classroom from "../pages/Classroom";
import DetailClass from "../pages/DetailClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutNavSid />,
    // loader: () => {
    //   if (!localStorage?.access_token) {
    //     throw redirect("/login");
    //   }
    //   return null;
    // },
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "task",
        element: <HomePage />,
      },
      {
        path: "classroom",
        element: <Classroom />,
      },
      {
        path: "detail_class",
        element: <DetailClass />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
    // loader: () => {
    //   if (localStorage?.access_token) {
    //     throw redirect("/");
    //   }
    //   return null;
    // },
  },
  {
    path: "register",
    element: <RegisterPage />,
    // loader: () => {
    //   if (localStorage?.access_token) {
    //     throw redirect("/");
    //   }
    //   return null;
    // },
  },
]);

export default router;
