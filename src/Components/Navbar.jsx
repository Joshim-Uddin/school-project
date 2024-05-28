import { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    console.log(openMenu)
    return (
        <div className="wrapper">
            <ul className="flex items-center md:gap-8 px-2  py-2 shadow-sm bg-[#FAFAFA] max-[600px]:hidden">
                <li>
                    <a href="/"><FaHome className="text-2xl"/></a>
                </li>
                <li>
                    <a href="/#">আমাদের সম্পর্কে</a>
                </li>
                <li>
                    <a href="/#">আমাদের সেবা</a>
                </li>
                <li>
                    <a href="/#">কার্যালয়সমূহ</a>
                </li>
                <li>
                    <a href="/gallery">গ্যালারী</a>
                </li>
                <li>
                    <a href="/contact">যোগাযোগ</a>
                </li>
                <li>
                    <a href="/review">মতামত</a>
                </li>
            </ul>
            <div className="min-[600px]:hidden relative">
                <div className="flex justify-between items-center px-3">
                <a href="/"><FaHome className="text-2xl"/></a>
                <FaBars onClick={()=>setOpenMenu(!openMenu)}/>
                </div>
            <ul className={openMenu?"flex-col items-center justify-center text-center px-2 shadow-sm bg-[#F9F9F9] transition-transform":"absolute -top-48"}>
                <li className="pb-2">
                    <a href="/#">আমাদের সম্পর্কে</a>
                </li>
                <li className="pb-2">
                    <a href="/#">আমাদের সেবা</a>
                </li>
                <li className="pb-2">
                    <a href="/#">কার্যালয়সমূহ</a>
                </li>
                <li className="pb-2">
                    <a href="/gallery">গ্যালারী</a>
                </li>
                <li className="pb-2">
                    <a href="/contact">যোগাযোগ</a>
                </li>
                <li className="pb-2">
                    <a href="/review">মতামত</a>
                </li>
            </ul>
            </div>
           
           
        </div>
    );
};

export default Navbar;