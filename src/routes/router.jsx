import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import AddJob from "../pages/AddJob/AddJob";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import UpdateJob from "../pages/MyPostedJobs/UpdateJob";
import MyBids from "../pages/MyBids/MyBids";
import BidRequests from "../pages/BidRequests/BidRequests";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobDetails/:id",
        element: <PrivateRoute><JobDetails /></PrivateRoute>
      },
      {
        path: "/updateJob/:id",
        element: <UpdateJob/>
      },
      {
        path: "/addJob",
        element:<PrivateRoute> <AddJob /></PrivateRoute>
      },
      {
        path: "/myPostedJobs",
        element: <PrivateRoute><MyPostedJobs/></PrivateRoute>
      },
      {
        path: "/myBids",
        element: <PrivateRoute><MyBids/></PrivateRoute>
      },
      {
        path: "/bidRequests",
        element: <PrivateRoute><BidRequests/></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
