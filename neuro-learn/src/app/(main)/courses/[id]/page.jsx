
import CourseTimeline from '@/components/courses/CourseTimeline';
import Details from '@/components/courses/Details';
import { Suspense } from 'react';

const page = async ({params}) => {
    
 const {id} = await params ; 
    console.log(id) ; 
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <Details id={id}></Details>
            </Suspense>
            <CourseTimeline></CourseTimeline>
        </div>
    );
};

export default page;