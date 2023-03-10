import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Sidebar = ({course}) => {
  const {id, name} = course;
  console.log(course);

  const navigate = useNavigate(); 
  const handleNavigate = () =>{
    navigate(`/course/${id}`);
}

  return (
    <div className=''>
      <div>
          <Link to={`/course/${id}`}>   
      <button onClick={handleNavigate} className='w-100 mt-4 px-3 py-2 '> {name}</button>
            </Link>
         </div>
    </div>
  );
};

export default Sidebar;