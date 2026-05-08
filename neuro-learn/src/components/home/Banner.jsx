
import Image from 'next/image'
import Link from 'next/link';
import { IoArrowForward, IoSparkles } from 'react-icons/io5';

const Banner = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#4F8CFF]/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#7C5CFF]/15 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
                <Image
                    src="/bannerImg.png"
                    fill
                    alt="banner background"
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4F8CFF]/10 border border-[#4F8CFF]/20">
                            <IoSparkles className="w-4 h-4 text-[#4F8CFF]" />
                            <span className="text-sm font-medium text-[#4F8CFF]">Welcome to the future of learning</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="heading-display">
                                Learn and Build <br />
                                <span className="text-gradient">the Future</span>
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed max-w-xl">
                                Master machine learning, deep learning, and research skills with hands-on, real-world projects. 
                                Guided by industry experts.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/courses" className="btn-premium px-8 py-4 inline-flex items-center justify-center gap-2 group">
                                <span>Explore Courses</span>
                                <IoArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button className="btn-secondary px-8 py-4 inline-flex items-center justify-center">
                                Learn More
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 pt-8 border-t border-[#253150]">
                            <div>
                                <p className="text-2xl font-bold text-[#4F8CFF]">50K+</p>
                                <p className="text-sm text-text-secondary">Active Learners</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#7C5CFF]">500+</p>
                                <p className="text-sm text-text-secondary">Expert Courses</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#22D3EE]">95%</p>
                                <p className="text-sm text-text-secondary">Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Visual Element */}
                   
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-text-secondary">Scroll to explore</span>
                    <div className="w-6 h-10 border border-[#253150] rounded-full flex justify-center p-2">
                        <div className="w-1 h-2 bg-[#4F8CFF] rounded-full animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;