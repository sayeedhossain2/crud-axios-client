import { createBrowserRouter } from "react-router-dom";
import EmployerInfo from "../../Component/EmployerInfo/EmployerInfo";
import EmployerList from "../../Component/EmployerList/EmployerList";
import Home from "../../Component/Home/Home";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/emplpyerinfo",
        element: <EmployerInfo></EmployerInfo>,
      },
      {
        path: "/emplpyerlist",
        element: <EmployerList></EmployerList>,
      },
    ],
  },
]);
