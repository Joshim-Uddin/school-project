import logo from "/logo.png"
// import schoolLogo from "./../assets/school.png"
import one from "./../assets/1.jpg"
import { Link } from "react-router-dom"
const Hero = () => {
    return (
        <div className="relative">
            <img src={one} alt="" className='max-h-[242px] w-full'/>
            <Link to="/" className="flex items-center gap-3 absolute top-[40%] left-5">
                <img src={logo} alt="bangladesh logo" className="w-12"/>
                <h2 className="md:text-3xl text-xl font-bold text-white heading">খারিজাথাক সপ্রাবি, দৌলতপুর, কুষ্টিয়া</h2>
            </Link>
        </div>
    );
};

export default Hero;