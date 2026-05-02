
import Image from 'next/image'

const Banner = () => {
    return (
        <div className='container mx-auto sm:rounded-xl '>
                <div className="card image-full  h-[70vh] shadow-sm">
                <figure >
                     <Image
                    src="/bannerImg.png"
                    fill
                    alt="banner image"
                    className='sm:rounded-2xl'
                    />
                </figure>
                <div className="card-body py-50">
                    <h2 className="card-title text-5xl">Learn and Build the Future.</h2>
                    <p>Master machine learning, deep learning, and research skills with hands-on, real-world projects.</p>
                      <div className="card-actions">
                        <button className="btn btn-primary ">Get Started</button>
                      </div>
                </div>
               
                </div>
        </div>
    );
};

export default Banner;