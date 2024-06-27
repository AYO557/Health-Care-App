import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Unauthenticated from "../layouts/Unauthenticated";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import ForgotPassword from "../pages/forgotPassword";
import { action as registerAction, loginAction } from "../database";
import Home from "../pages/home";
import Authenticated from "../layouts/Authenticated";
import AppointmentPage from "../pages/appointment";
import NotificationPage from "../pages/notifications";
import DoctorPage from "../pages/DoctorPage";
import SettingsPage from "../pages/settings";

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
          element: <AppointmentPage />,
        },
        {
          path: "notifications",
          element: <NotificationPage />,
        },
        {
          path: "doctor",
          element: <DoctorPage />,
        },
        {
          path: "settings",
          element: <SettingsPage />,
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
