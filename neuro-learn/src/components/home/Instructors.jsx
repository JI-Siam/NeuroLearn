import React from 'react';
import Instructor from '../shared/Instructor';
import Marquee from 'react-fast-marquee';

const Instructors = async () => {
    const res = await fetch("http://localhost:3004/instructors"); 
    const instructors = await res.json() ;
    return (
     <div className='container mx-auto my-20'>
            <h3 className='text-4xl font-bold text-center my-20'>Top Instructors</h3>
           <Marquee>
            <div className='flex gap-10'>
                   {instructors.map(ins => <Instructor key={ins.id} instructor={ins}></Instructor>)}
            </div>
         
           </Marquee>
        </div>
    );
};

export default Instructors;