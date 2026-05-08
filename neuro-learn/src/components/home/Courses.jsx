import React from 'react';
import Course from '../shared/Course.jsx';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';

const Courses = async () => {
  
    const res = await fetch("https://neuro-learn-server.onrender.com/courses"); 
    const courses = await res.json(); 
    const topCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 3); 

    return (
        <section className="section-padding border-b border-[#253150]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full badge-premium mb-4">
                        Premium Content
                    </span>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div>
                            <h2 className="heading-h1 mb-4">
                                Top Rated <span className="text-gradient">Courses</span>
                            </h2>
                            <p className="text-text-secondary text-lg max-w-2xl">
                                Explore our most popular and highly-rated courses, carefully crafted by industry experts.
                            </p>
                        </div>
                        <Link
                            href="/courses"
                            className="btn-secondary px-8 py-3 inline-flex items-center gap-2 group whitespace-nowrap"
                        >
                            <span>View All</span>
                            <IoArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topCourses.map((course, index) => (
                        <div
                            key={course.id}
                            className="animate-slide-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Course course={course} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;