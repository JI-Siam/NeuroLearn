
import Link from "next/link";
import { IoIosStar } from "react-icons/io";

const Course = ({course}) => {
 // console.log(course.id) ;
    return (
        <div>
                <div className="card bg-base-100  shadow-sm shadow-purple-900">
  <figure>
    <img
      src={course.image}
      alt="course banner" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {course.title}
      <div className="badge bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 text-white">{course.rating}<IoIosStar></IoIosStar></div>
    </h2>
    <p>{course.instructor}</p>
    <div className="card-actions justify-end">
      <Link href={`/courses/${course.id}`} className="btn btn-primary" >View</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Course;