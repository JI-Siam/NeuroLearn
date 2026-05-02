import AllCourses from '@/components/courses/AllCourses';


const page = async () => {
     const res = await fetch("http://localhost:3004/courses"); 
    const courses = await res.json(); 
    return (
        <div>
            <AllCourses courses={courses}></AllCourses>
        </div>
    );
};

export default page;
