import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import General from './components/General';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import Students from './components/Students';
import Subjects from './components/Subjects';

const router = createBrowserRouter([
  {
    path: "/", element: <SignIn/>
  },
  {
    path: "/general", element: <General/>
  },
  {
    path: "/profile", element: <Profile />
  },
  {
    path: "/students", 
    element: <Students/>,
    loader: ({ request }) =>
      fetch(`${process.env.REACT_APP_BASE_URL}api/getAll`, {
        signal: request.signal,
      })
  },
  {
    path: "/students/:subject", 
    element: <Students/>,
    loader: ({ request, params }) =>
      fetch(`${process.env.REACT_APP_BASE_URL}api/getStudents/${params.subject}`, {
        signal: request.signal,
      })
  },
  {
    path: "/subjects", element: <Subjects/>
  },
  {
    path: "/profile/:email", 
    element: <Profile/>,
    loader: ({ request, params }) =>
      fetch(`${process.env.REACT_APP_BASE_URL}api/getStudentsByEmail/${params.email}`, {
        signal: request.signal,
      })
  },
  // {
  //   path: "/profile", element: <Profile/>
  // },
]);
  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();