import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
  const courses = useLoaderData();

  return (
        <div className=' courses-container container mt-5 pt-5'>
        <div className=' sidebar'>
        <h3 className='mb-4'> Available Courses: {courses.length}</h3>
         <div>
            {
              courses.map(course => <Sidebar course={course} key={course.id}></Sidebar>)
             }
         </div>        
         </div> 
         <div className='courses'>
              {
               courses.map(course => <Course course={course} key={course.id} ></Course>)
              }
       </div>  
    </div> 
  );
};

export default Courses;