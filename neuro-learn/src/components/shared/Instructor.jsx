import React from 'react';
import { IoStar } from 'react-icons/io5';

const Instructor = ({ instructor }) => {
    return (
        <div className="card-premium flex-shrink-0 w-80 p-6 flex flex-col items-center text-center group">
            <div className="relative mb-6 w-full flex items-center justify-center">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden ring-2 ring-[#253150] group-hover:ring-[#4F8CFF] transition-all duration-300">
                    <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <h3 className="heading-h4 mb-1 group-hover:text-[#4F8CFF] transition-colors duration-300">
                {instructor.name}
            </h3>

            <div className="flex items-center gap-1 mb-3">
                <IoStar className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-xs font-medium text-[#F59E0B]">Expert</span>
            </div>

            <div className="mb-4 text-sm text-[#4F8CFF] font-medium px-3 py-1 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/20">
                {instructor.expertise}
            </div>

            <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-4">
                {instructor.bio}
            </p>

            <div className="w-full mt-auto pt-4 border-t border-[#253150]">
                <button className="w-full py-2 rounded-lg text-sm font-medium text-[#4F8CFF] hover:bg-[#4F8CFF]/10 transition-colors duration-300">
                    View Profile
                </button>
            </div>
        </div>
    );
};

export default Instructor;