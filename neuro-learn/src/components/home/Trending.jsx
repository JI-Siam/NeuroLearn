import TrendingSwipper from "./TrendingSwipper";

const Trending = async () => {
      const res = await fetch("http://localhost:3004/courses"); 
    const courses = await res.json(); 

    const trendingCourses = courses.filter(crs => (crs.id == '2' || crs.id== '3' || crs.id== '4'));
   // console.log(trendingCourses , "trending") ;
    return (
       <div className='container mx-auto my-40'>
            <h3 className='text-5xl font-bold text-center  font-[--font-roboto-slab] my-20'>Trending Courses</h3>
            <TrendingSwipper courses={trendingCourses}></TrendingSwipper>
        </div>
    );
};

export default Trending;