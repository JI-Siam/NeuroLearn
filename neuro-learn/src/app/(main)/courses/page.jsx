import AllCourses from '@/components/courses/AllCourses';


const page = async () => {
     const res = await fetch("https://neuro-learn-server.onrender.com/courses"); 
    const courses = await res.json(); 
    return (
        <div>
            <AllCourses courses={courses}></AllCourses>
        </div>
    );
};

export default page;
