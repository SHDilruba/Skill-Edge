import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Course from './components/Course/Course';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/courses',
          loader: () => fetch('http://localhost:5000/courses'),
          element: <Courses></Courses>
        },
        {
          path: '/courses/:id',
          loader: async({params}) =>{
            return fetch(`http://localhost:5000/courses${params.id}`)
          },
          element: <Course></Course>
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
