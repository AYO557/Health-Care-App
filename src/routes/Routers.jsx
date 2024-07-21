import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Unauthenticated from "../layouts/Unauthenticated";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import ForgotPassword from "../pages/forgotPassword";
import { action as registerAction, loginAction } from "../database";
import Home from "../pages/home";
import Authenticated from "../layouts/Authenticated";
import DoctorPage from "../pages/DoctorPage";
import Appointments from "../pages/appointmentsPage";
import App from "../pages/App";

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authenticated />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "appointment",
          element: <Appointments />,
        },
        {
          path: "doctor",
          element: <DoctorPage />,
        },
        {
          path: "approach",
          element: <App />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Unauthenticated />,
      children: [
        {
          index: true,
          element: <Login />,
          action: loginAction,
        },
        {
          path: "register",
          element: <SignUp />,
          action: registerAction,
        },
        {
          path: "forgotPassword",
          element: <ForgotPassword />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routers;
