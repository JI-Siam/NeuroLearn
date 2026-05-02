'use client'
import { useState } from 'react';
import Course from '../shared/Course.jsx';


const AllCourses = ({courses}) => {
   
    const [filteredCourse, setFilteredCourse] = useState(courses) ;

    //console.log(filteredCourse , "filter course") ;

    const handleSearch = (value)=> {
             const query = value.toLowerCase();
             const searchItem = query
                ? courses.filter(crs => crs.title.toLowerCase().includes(query))
                : courses;

            setFilteredCourse(searchItem); 
          //  console.log(searchItem , "searchItem") ; 
            }

    return (
        <div className='container mx-auto lg:my-40'>
            <div className='flex justify-between items-center'>
                <h3 className='text-5xl font-bold my-10 font-[--font-roboto-slab]'>Explore All Courses</h3>
                     <input type="text" className="input" onChange={(e) => handleSearch(e.target.value)} placeholder="Search courses by Title"  /> 
                
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
            {filteredCourse?.map(course => <Course key={course.id} course={course}></Course>)}
        </div>
        </div>
        
    );
};

export default AllCourses;