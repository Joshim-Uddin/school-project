import { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className="wrapper relative">
            <ul className="flex items-center px-2  py-2 shadow-sm bg-[#FAFAFA] max-[600px]:hidden">
                <li>
                    <a href="/"><FaHome className="text-2xl"/></a>
                </li>
                <li className="hover:bg-[#C40A2A] hover:text-white hover:font-bold">
                    <a href="/">প্রথম পাতা</a>
                </li>
                <li className="about ">
                    <a href="/#">আমাদের সম্পর্কে</a>
                    <ul className="submenu">
                        <li>অফিস সম্পর্কিত
                            <ul>
                                <li><a href="">এক নজরে</a></li>
                                <li><a href="">ভিশন ও মিশন</a></li>
                                <li><a href="">আমাদের অর্জনসমূহ</a></li>
                                <li><a href="">সাম্প্রতিক কর্মকান্ড</a></li>
                                <li><a href="">ভবিষ্যত পরিকল্পনা</a></li>
                                <li><a href="">ঘটনাপুঞ্জ</a></li>
                            </ul>
                        </li>
                        <li>
                            জনবল
                            <ul>
                                <li><a href="/headmaster">প্রধান শিক্ষক</a></li>
                                <li><a href="">প্রাক্তন প্রধান শিক্ষকগণ</a></li>
                                <li><a href="">সহকারী শিক্ষকগণ</a></li>
                                <li><a href="">কর্মচারীগণ</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/#">আমাদের সেবা</a>
                </li>
                <li className="offices">
                    <a href="/#">কার্যালয়সমূহ</a>
                    <ul className="officesubmenu">
                        <li><a href="http://eo.daulatpur.kushtia.gov.bd/">উপজেলা শিক্ষা অফিস</a></li>
                        <li><a href="https://dpe.kushtia.gov.bd/">জেলা প্রাথমিক শিক্ষা অফিস</a></li>
                        <li><a href="https://www.dpe.gov.bd/">প্রাথমিক শিক্ষা অধিদপ্তর</a></li>
                    </ul>
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