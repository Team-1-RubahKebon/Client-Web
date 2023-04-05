import { createBrowserRouter, redirect } from "react-router-dom";
import LayoutNavSid from "../components/LayoutNavSid";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Classroom from "../pages/Classroom";
import DetailClass from "../pages/DetailClass";
import AssignmentPage from "../pages/AssignmentPage";
import FormAssigment from "../pages/Form/FormAssigments";
import Profile from "../pages/profile/Profile";
import FormClass from "../pages/Form/FormClass";
import DetailAssigment from "../pages/DetailAssigment";
import DetailAssign from "../pages/DetailAssign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutNavSid />,
    loader: () => {
      if (!localStorage?.access_token) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "assignment",
        element: <AssignmentPage />,
      },
      {
        path: "assignment/:id",
        element: <DetailAssign />,
      },
      {
        path: "assignment/form",
        element: <FormAssigment />,
      },
      {
        path: "assignment/student/:id",
        element: <DetailAssigment />,
      },
      {
        path: "classroom",
        element: <Classroom />,
      },
      {
        path: "classroom/form",
        element: <FormClass />,
      },
      {
        path: "classroom/:id",
        element: <DetailClass />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage?.access_token) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "register",
    element: <RegisterPage />,
    loader: () => {
      if (localStorage?.access_token) {
        throw redirect("/");
      }
      return null;
    },
  },
]);

export default router;
