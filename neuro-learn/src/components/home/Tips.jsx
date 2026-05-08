'use client';

import React from 'react';
import { IoChevronDown, IoBookmarks, IoTime } from 'react-icons/io5';

const AccordionItem = ({ title, description, isOpen, onToggle, icon: Icon }) => {
    return (
        <div className="group cursor-pointer" onClick={onToggle}>
            <div className={`px-6 py-5 rounded-2xl transition-all duration-300 border border-[#253150] hover:border-[#4F8CFF] hover:bg-[#1F2D45] ${isOpen ? 'bg-[#1F2D45] border-[#4F8CFF]' : 'bg-[#151C2F]'}`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#4F8CFF]/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-[#4F8CFF]" />
                        </div>
                        <h4 className="font-semibold text-[#F3F4F6] group-hover:text-[#4F8CFF] transition-colors">{title}</h4>
                    </div>
                    <IoChevronDown className={`w-5 h-5 text-[#4F8CFF] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
                </div>
            </div>
            {isOpen && (
                <div className="px-6 py-4 bg-[#111827] border-x border-b border-[#253150] rounded-b-2xl -mt-px">
                    <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
                </div>
            )}
        </div>
    );
};

const Tips = () => {
    const [openItems, setOpenItems] = React.useState({});

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const studyTechniques = [
        {
            id: 'recall',
            title: 'Active Recall',
            description: 'Try to remember what you studied without looking at notes. It strengthens memory and improves retention significantly.'
        },
        {
            id: 'spaced',
            title: 'Spaced Repetition',
            description: 'Revise topics multiple times over days or weeks instead of cramming once. This technique leverages long-term memory.'
        },
        {
            id: 'notes',
            title: 'Take Smart Notes',
            description: 'Use bullet points, headings, and short summaries instead of long paragraphs for better retention.'
        },
        {
            id: 'pomodoro',
            title: 'Pomodoro Technique',
            description: 'Study for 25 minutes, then take a 5-minute break to stay focused. This prevents mental fatigue.'
        },
        {
            id: 'teach',
            title: 'Teach Someone Else',
            description: 'Explaining a topic helps you understand it better and identify gaps in your knowledge.'
        }
    ];

    const timeManagement = [
        {
            id: 'schedule',
            title: 'Make a Simple Schedule',
            description: 'Plan what to study each day instead of studying randomly. Consistency is key to success.'
        },
        {
            id: 'goals',
            title: 'Set Small Goals',
            description: 'Break big tasks into smaller ones (e.g., "finish 2 chapters" instead of "study science"). Small wins build momentum.'
        },
        {
            id: 'prioritize',
            title: 'Prioritize Hard Subjects First',
            description: 'Do difficult topics when your mind is fresh and concentration is high.'
        },
        {
            id: 'distraction',
            title: 'Avoid Distractions',
            description: 'Keep phone aside and study in a quiet place. Your environment greatly affects learning quality.'
        },
        {
            id: 'breaks',
            title: 'Take Breaks',
            description: 'Short breaks help your brain stay fresh and focused. Regular rest improves overall productivity.'
        }
    ];

    return (
        <section className="section-padding border-b border-[#253150]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full badge-premium mb-4">
                        Pro Tips
                    </span>
                    <h2 className="heading-h1 mb-4">
                        Master <span className="text-gradient">Learning Techniques</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Learn proven strategies to accelerate your learning journey and maximize retention.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <IoBookmarks className="w-6 h-6 text-[#4F8CFF]" />
                            <h3 className="heading-h3">Study Techniques</h3>
                        </div>
                        <div className="space-y-3">
                            {studyTechniques.map(item => (
                                <AccordionItem
                                    key={item.id}
                                    {...item}
                                    isOpen={openItems[item.id]}
                                    onToggle={() => toggleItem(item.id)}
                                    icon={IoBookmarks}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <IoTime className="w-6 h-6 text-[#7C5CFF]" />
                            <h3 className="heading-h3">Time Management</h3>
                        </div>
                        <div className="space-y-3">
                            {timeManagement.map(item => (
                                <AccordionItem
                                    key={item.id}
                                    {...item}
                                    isOpen={openItems[item.id]}
                                    onToggle={() => toggleItem(item.id)}
                                    icon={IoTime}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tips;
