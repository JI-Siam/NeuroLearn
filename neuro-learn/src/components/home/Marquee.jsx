
import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div className="my-20">
               <Marquee className="bg-purple-100 py-10 space-x-3 font-bold">
                    <div className="flex space-x-24">
                        <h1>Build AI Models</h1>
                        <h1>Train Neural Networks</h1>
                        <h1>Analyze Data</h1>
                        <h1>Publish Research</h1>
                        <h1>Deploy ML Systems</h1>
                        <h1>Solve Real Problems</h1>
                    </div>
                </Marquee>
        </div>
    );
};

export default Slider;