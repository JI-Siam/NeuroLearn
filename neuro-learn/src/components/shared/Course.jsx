
import Link from "next/link";
import { IoStar, IoArrowForward } from "react-icons/io5";

const Course = ({ course }) => {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="card-premium group cursor-pointer h-full flex flex-col">
        {/* Image Container with Overlay */}
        <div className="relative overflow-hidden h-56 bg-gradient-to-br from-[#1F2D45] to-[#151C2F]">
          {course.image && (
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            />
          )}
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Rating Badge */}
          <div className="absolute top-4 right-4 badge-premium flex items-center gap-1">
            <IoStar className="w-4 h-4 fill-current" />
            <span className="font-bold text-sm">{course.rating}</span>
          </div>

          {/* View Arrow Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
              <IoArrowForward className="w-6 h-6 text-[#4F8CFF] transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col p-6">
          {/* Title */}
          <h3 className="heading-h4 line-clamp-2 mb-3 group-hover:text-[#4F8CFF] transition-colors duration-300">
            {course.title}
          </h3>

          {/* Instructor */}
          <p className="text-text-secondary text-sm mb-4 line-clamp-1">
            by <span className="text-text-primary font-medium">{course.instructor}</span>
          </p>

          {/* Description or meta info - optional */}
          <div className="flex-1 mb-4">
            <div className="flex items-center gap-2 text-xs text-text-tertiary">
              <div className="w-1 h-1 rounded-full bg-[#4F8CFF]" />
              <span>Professional Course</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full btn-premium py-2.5 text-sm font-medium flex items-center justify-center gap-2 group/btn">
            <span>Explore</span>
            <IoArrowForward className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Animated border gradient on hover */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, #4F8CFF20, #7C5CFF10)',
          }}
        />
      </div>
    </Link>
  );
};

export default Course;