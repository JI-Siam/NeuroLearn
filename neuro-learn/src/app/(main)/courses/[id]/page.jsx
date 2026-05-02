
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
        </div>
    );
};

export default page;