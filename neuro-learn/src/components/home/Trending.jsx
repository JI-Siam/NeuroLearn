import TrendingSwipper from "./TrendingSwipper";

const Trending = async () => {
    const res = await fetch("https://neuro-learn-server.onrender.com/courses"); 
    const courses = await res.json(); 

    const trendingCourses = courses.filter(crs => (crs.id == '2' || crs.id == '3' || crs.id == '4'));

    return (
        <section className="section-padding border-b border-[#253150]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full badge-premium mb-4">
                        Hot This Week
                    </span>
                    <h2 className="heading-h1 mb-4">
                        <span className="text-gradient">Trending</span> Courses
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Discover what learners are loving right now. These trending courses are transforming careers.
                    </p>
                </div>

                {/* Trending Carousel */}
                <div className="rounded-3xl overflow-hidden border border-[#253150] p-8 bg-gradient-to-br from-[#151C2F]/50 to-[#111827]/50 backdrop-blur-xl">
                    <TrendingSwipper courses={trendingCourses} />
                </div>
            </div>
        </section>
    );
};

export default Trending;