
import Details from '@/components/courses/Details';

const page = async ({params}) => {
    
 const {id} = await params ; 
    console.log(id) ; 
    return (
        <div>
            <Details id={id}></Details>
        </div>
    );
};

export default page;