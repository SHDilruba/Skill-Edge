import React from 'react'
// import ReactDOM from 'react-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Course from './components/Course/Course';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Faq from './components/Faq/Faq';
import CourseDetail from './components/CourseDetails/CourseDetail';
import Sidebar from './components/Sidebar/Sidebar';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/courses',
          loader: async() =>{
            return  fetch('http://localhost:5000/courses')
          },
          element: <Courses></Courses>
        },
        {
          path: '/course',
          loader: async() =>{
            return fetch('http://localhost:5000/courses')
          },
          element: <Course></Course>
        },
        {
          path: '/course',
          loader: async({params}) =>{
            return fetch(`http://localhost:5000/courses/${params.courseId}`)
          },
          element: <Sidebar></Sidebar>
        },
        {
          path: '/course/:courseId',
          loader: async({params}) =>{
            return fetch(`http://localhost:5000/courses/${params.courseId}`)
          },
          element: <CourseDetail></CourseDetail>
        },
        {
          path: '/detail/:detailId',
          loader: async({params}) =>{
            return fetch(`http://localhost:5000/courses/${params.detailId}`)
          },
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
        },
        {
          path: "/blog",
          loader: async()=>{
            return fetch('blog.json')
          },
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '*',
          element: <Faq></Faq>
        }
      ]
    }
  ])

  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>  
    </div>
  );
}

export default App;
