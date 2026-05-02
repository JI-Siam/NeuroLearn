import React from 'react';
import Course from '../shared/Course.jsx';

const AllCourses = async () => {
    const res = await fetch("http://localhost:3004/courses"); 
    const courses = await res.json(); 

    return (
        <div className='container mx-auto lg:my-40'>
            <h3 className='text-4xl font-bold my-10'>All Courses</h3>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
            {courses.map(course => <Course key={course.id} course={course}></Course>)}
        </div>
        </div>
        
    );
};

export default AllCourses;