import React from 'react';
import Instructor from '../shared/Instructor';
import Marquee from 'react-fast-marquee';

const Instructors = async () => {
    const res = await fetch("https://neuro-learn-server.onrender.com/instructors"); 
    const instructors = await res.json();

    return (
        <section className="section-padding border-b border-[#253150]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full badge-premium mb-4">
                        Expert Team
                    </span>
                    <h2 className="heading-h1 mb-4">
                        Learn from <span className="text-gradient">Top Instructors</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Discover our world-class instructors bringing decades of expertise and real-world experience.
                    </p>
                </div>

                {/* Instructors Carousel */}
                <div className="overflow-hidden -mx-6 px-6">
                    <Marquee
                        gradient={false}
                        speed={40}
                        pauseOnHover
                        className="py-8"
                    >
                        <div className="flex gap-8 px-4">
                            {instructors.concat(instructors).map((instructor, index) => (
                                <div key={`${instructor.id}-${index}`} className="flex-shrink-0">
                                    <Instructor instructor={instructor} />
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Instructors;