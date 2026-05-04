import React from 'react';
import Course from '../shared/Course.jsx';




const Courses = async () => {
  
    const res = await fetch("https://neuro-learn-server.onrender.com/courses"); 
    const courses = await res.json(); 
    const topCourses = courses.sort((a,b) => b.rating - a.rating).slice(0,3); 

   // console.log(courses)
    return (
        <div className='lg:mb-40 '>
            <div className='container mx-auto'>
                 <h3 className="text-5xl text-center font-bold mb-20 font-[--font-roboto-slab]">Top Rated Courses</h3>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {topCourses.map(course => <Course key={course.id} course={course}></Course>)}
            </div>
           
        </div>
        </div>
        
    );
};

export default Courses;