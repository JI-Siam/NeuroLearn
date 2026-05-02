import React from 'react';

const Instructor = ({instructor}) => {
    return (
        <div>
            <div className="card bg-gradient-to-br from-slate-100 via-purple-200 to-slate-100  w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                    src={instructor.image}
                    alt="instructor"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{instructor.name}</h2>
                     <p>{instructor.expertise}</p>
                    <p>{instructor.bio}</p>
                   
                </div>
                </div>
        </div>
    );
};

export default Instructor;