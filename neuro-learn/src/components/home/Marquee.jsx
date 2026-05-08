
import Marquee from "react-fast-marquee";
import { IoFlash } from "react-icons/io5";

const Slider = () => {
    const tags = [
        "Build AI Models",
        "Train Neural Networks",
        "Analyze Data",
        "Publish Research",
        "Deploy ML Systems",
        "Solve Real Problems"
    ];

    return (
        <div className="relative py-16 overflow-hidden border-y border-[#253150]">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF]/5 via-transparent to-[#7C5CFF]/5 pointer-events-none" />
            
            <div className="relative z-10 max-w-7xl mx-auto">
                <Marquee
                    gradient={false}
                    speed={50}
                    pauseOnHover
                    className="py-8"
                >
                    <div className="flex gap-16 px-8">
                        {tags.concat(tags).map((tag, index) => (
                            <div key={index} className="flex items-center gap-4 whitespace-nowrap flex-shrink-0">
                                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#4F8CFF]/10 to-[#7C5CFF]/10 border border-[#4F8CFF]/20 hover:border-[#4F8CFF]/50 transition-colors duration-300">
                                    <IoFlash className="w-4 h-4 text-[#4F8CFF] flex-shrink-0" />
                                    <span className="font-semibold text-text-primary text-sm">
                                        {tag}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Slider;