import React from 'react';
import Instructor from '../shared/Instructor';
import Marquee from 'react-fast-marquee';

const Instructors = async () => {
    const res = await fetch("https://neuro-learn-server.onrender.com/instructors"); 
    const instructors = await res.json() ;
    return (
     <div className='container mx-auto my-20'>
            <h3 className='text-5xl font-bold text-center font-[--font-roboto-slab] my-20'>Top Instructors</h3>
           <Marquee pauseOnHover="true" direction='right' gradient="true" >
            <div className='flex gap-10'>
                   {instructors.map(ins => <Instructor key={ins.id} instructor={ins}></Instructor>)}
            </div>
         
           </Marquee>
        </div>
    );
};

export default Instructors;