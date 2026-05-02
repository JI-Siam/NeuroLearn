
const Details =  async ({id}) => {
      const res = await fetch("http://localhost:3004/courses"); 
    const courses = await res.json(); 
    const course = courses.find(crs => crs.id == id) ; 

    return (
        <div>   
            <div className="hero bg-base-200 h-[80vh]">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                              <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-[50vh] object-cover rounded-lg"
                 />
                </div>
                <div className="space-y-5">
            <h1 className="text-2xl font-bold text-gray-800">
                {course.title}
            </h1>
            <p className="text-gray-600">
                Instructor: <span className="font-medium">{course.instructor}</span>
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                     {course.duration}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                     {course.rating}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                    {course.level}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                    {course.category}
                </span>
            </div>
            <p className="text-gray-700 leading-relaxed">
                {course.description}
            </p>
              <button className="btn btn-primary">Enroll Now</button>
        </div>
    </div>
  
  </div>
        </div>
    );
};



export default Details;