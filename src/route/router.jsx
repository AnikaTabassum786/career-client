import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import PrivateRoute from "../routes/PrivateRoute";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import ViewApplication from "../pages/ViewApplication/ViewApplication";



const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,

    children:[
        {
            index:true,
            Component:Home
        },
        {

          path:'/jobs/:id',
          Component:JobDetails,
          loader:({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)

        },
        {
          path:'/jobApply/:id',
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>,
        },
        {
          path:'/myApplication',
          element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },
        {
          path:'/addJob',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        
        {
          path:'/myPostedJob',
          element:<PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
          
        },
        {
          path:'/applications/:job_id',
          element:<PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
          loader:({params}) =>fetch(`http://localhost:3000/applications/jobs/${params.job_id}`)
        },
        {
            path: '/register',
            Component:Register
        },
        {
            path: '/login',
            Component:Login
        }
    ]
  },
]);

export default router;