'use client'
import { useState, useEffect } from 'react';
import Course from '../shared/Course.jsx';
import { IoSearch, IoClose } from 'react-icons/io5';

const AllCourses = ({ courses }) => {
  const [filteredCourse, setFilteredCourse] = useState(courses);
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (value) => {
    setSearchValue(value);
    const query = value.toLowerCase();
    const searchItem = query
      ? courses.filter(crs => crs.title.toLowerCase().includes(query))
      : courses;
    setFilteredCourse(searchItem);
  };

  const clearSearch = () => {
    setSearchValue('');
    setFilteredCourse(courses);
  };

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          {/* Main Title */}
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full badge-premium mb-4">
              Our Courses
            </span>
            <h1 className="heading-h1 mb-4">
              Explore Our <span className="text-gradient">Learning Catalog</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Discover cutting-edge courses designed to accelerate your learning journey. 
              From beginners to advanced professionals, find the perfect course for you.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <div className="relative">
              <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
              <input
                type="text"
                className="input-premium pl-12 pr-12 w-full"
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setIsSearching(true)}
                onBlur={() => setIsSearching(false)}
                placeholder="Search courses by title..."
              />
              {searchValue && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-[#1F2D45] rounded-lg transition-colors"
                >
                  <IoClose className="w-5 h-5 text-text-secondary hover:text-text-primary" />
                </button>
              )}
            </div>
            {/* Search hint */}
            {isSearching && (
              <div className="absolute top-full mt-2 left-0 right-0 text-xs text-text-tertiary">
                Found {filteredCourse.length} course{filteredCourse.length !== 1 ? 's' : ''}
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        {filteredCourse.length > 0 ? (
          <>
            {/* Results Count */}
            <div className="mb-8 flex items-center gap-2 text-text-secondary">
              <div className="flex-1 h-px bg-gradient-to-r from-[#4F8CFF]/20 to-transparent" />
              <span className="text-sm">
                Showing <span className="text-text-primary font-semibold">{filteredCourse.length}</span> course{filteredCourse.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {filteredCourse.map((course, index) => (
                <div key={course.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-slide-up">
                  <Course course={course} />
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#4F8CFF]/10 to-[#7C5CFF]/10 flex items-center justify-center mb-6">
              <IoSearch className="w-10 h-10 text-text-secondary" />
            </div>
            <h3 className="heading-h3 text-center mb-2">No courses found</h3>
            <p className="text-text-secondary text-center mb-8">
              Try adjusting your search terms to find what you're looking for.
            </p>
            <button
              onClick={clearSearch}
              className="btn-secondary px-6 py-3"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Stats Section - Optional */}
        {filteredCourse.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#253150]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#4F8CFF] mb-2">
                  {filteredCourse.length}+
                </p>
                <p className="text-text-secondary">Active Courses</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#7C5CFF] mb-2">
                  50K+
                </p>
                <p className="text-text-secondary">Students</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#22D3EE] mb-2">
                  95%
                </p>
                <p className="text-text-secondary">Success Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#10B981] mb-2">
                  4.8★
                </p>
                <p className="text-text-secondary">Average Rating</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCourses;