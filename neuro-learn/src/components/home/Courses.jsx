import React from 'react';
import Course from '../shared/Course.jsx';




const Courses = async () => {
  
    const res = await fetch("http://localhost:3004/courses"); 
    const courses = await res.json(); 
    const topCourses = courses.sort((a,b) => b.rating - a.rating).slice(0,3); 

    console.log(courses)
    return (
        <div className='container mx-auto lg:mb-40'>
            <h3 className="text-4xl font-bold text-center mb-20 font-[--font-roboto-slab]">Top Rated Courses</h3>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
            {topCourses.map(course => <Course key={course.id} course={course}></Course>)}
        </div>
        </div>
        
    );
};

export default Courses;