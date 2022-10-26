import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {

  const course = useLoaderData();
  console.log(course);

  return (
    <div>
      <h2>Single Course</h2>
    </div>
  );
};

export default Course;