import React from 'react';



const Tips = () => {
    return (
        <div className='mx-auto container mb-20 mt-40'>
            <h3 className='text-4xl font-bold text-center my-20'>Learning Tips</h3>

             <h3 className='text-2xl font-bold text-black/55  my-10'>Study Techniques</h3>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold">Active Recall</div>
                    <div className="collapse-content text-sm">Try to remember what you studied without looking at notes. It strengthens memory.</div>
                </div>
                 <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Spaced Repetition</div>
                    <div className="collapse-content text-sm">Revise topics multiple times over days or weeks instead of cramming once.</div>
                 </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Take Smart Notes</div>
                    <div className="collapse-content text-sm">Use bullet points, headings, and short summaries instead of long paragraphs.</div>
                </div>
                 <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Pomodoro Technique</div>
                    <div className="collapse-content text-sm">Study for 25 minutes, then take a 5-minute break to stay focused.</div>
                </div>
                 <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Teach Someone Else</div>
                    <div className="collapse-content text-sm">Explaining a topic helps you understand it better.</div>
                </div>


             <h3 className='text-2xl font-bold text-black/55  my-10'>Time Management Tips</h3>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold">Make a Simple Schedule</div>
                    <div className="collapse-content text-sm">Plan what to study each day instead of studying randomly.</div>
                </div>
                 <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Set Small Goals</div>
                    <div className="collapse-content text-sm">Break big tasks into smaller ones (e.g., “finish 2 chapters” instead of “study science”).</div>
                 </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Prioritize Hard Subjects First</div>
                    <div className="collapse-content text-sm">Do difficult topics when your mind is fresh.</div>
                </div>
                 <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Avoid Distractions</div>
                    <div className="collapse-content text-sm">Keep phone aside and study in a quiet place.</div>
                </div>
                 <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold">Take Breaks</div>
                    <div className="collapse-content text-sm">Short breaks help your brain stay fresh and focused.</div>
                </div>
        </div>
    );
};

export default Tips;