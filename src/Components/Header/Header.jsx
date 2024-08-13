
// import { FaBars, FaTimes } from 'react-icons/fa';
import { FaBarsStaggered } from "react-icons/fa6";
// import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
// import { FaTimesCircle } from "react-icons/fa";
import { useState } from "react";
// import { Link } from "react-dom";
import healthLogo from "../../assets/health-logo.png"
const Header = () => {

    // let Links = [
    //     { name: "HOME", link: "/" },
    //     { name: "SERVICE", link: "/" },
    //     { name: "ABOUT", link: "/" },
    //     { name: "CONTACT", link: "/" },
    // ];


    let [open, setOpen] = useState(false);


    const HandleClose = () => {
        setOpen(false)
    }


    return (
        // <div className="ml-3 flex items-center justify-between gap-5 md:ml-0 md:flex-col">
        <div>
            <div className='hidden lg:block'>
                <div className="flex items-center justify-between mt-1.5 lg:m1-0 ">
                    <div className="flex items-start">
                        <h4 className="text-3xl heading ui mt-1.5 self-end">
                            {/* <span className="font-medium text-blue_gray-900">Hai</span> */}
                            <span className="font-medium text-blue_gray-900">Hai</span>
                            <span className=" text-blue_gray-900">Doc</span>
                        </h4>
                        <a href="/">
                            <img
                                src={healthLogo}
                                alt="safety Icon"
                                className="h-[24px] w-[24px] object-cover"
                            />
                        </a>
                    </div>
                    <ul className="!mb-2.5 flex items-center space-x-4  gap-[62px]  md:gap-5 md:self-auto">
                        <li className=" hover:text-black text-gray-400  py-2 px-4 rounded-2xl ">
                            <a href="/">
                                <h6 className="text-[18px] ">Home</h6>
                            </a>
                        </li>
                        <li className=" hover:text-black text-gray-400 py-2 px-4 rounded-2xl ">
                            <a href="/">
                                <h6 className="text-[18px] heading ui ">Services</h6>
                            </a>
                        </li>
                        <li className=" hover:text-black text-gray-400 py-2 px-4 rounded-2xl ">
                            <a href="/">
                                <h6 className="text-[18px] ">Product</h6>
                            </a>
                        </li>
                        <li className=" hover:text-black text-gray-400 py-2 px-4 rounded-2xl ">
                            <a href="/">
                                <h6 className="text-[18px] ">About Us</h6>
                            </a>
                        </li>
                    </ul>

                    <button className="cyan_300_cyan_800_04 bg-gradient-to-tl from-blue-600 to-[#4ED6DA] p-3 text-white-a700 shadow  min-w-[146px] rounded-[26px] font-semibold ">
                        Register
                    </button>
                </div>
            </div>


            <div className='shadow-md  w-full fixed top-0 left-0  z-50 lg:hidden block '>
                <div className='flex items-center justify-between bg-white py-4  px-5 bg-white-a700'>
                    {/* logo section */}
                    <div className="flex items-start">
                        <h4 className="text-lg heading ui mt-1.5 self-end font-bold">
                            {/* <span className="font-medium text-blue_gray-900">Hai</span> */}
                            <span className="font-medium text-blue_gray-900">Hai</span>
                            <span className=" text-blue_gray-900">Doc</span>
                        </h4>
                        <a href="/">
                            <img
                                src={healthLogo}
                                alt="safety Icon"
                                className="h-[24px] w-[24px] object-cover"
                            />
                        </a>
                    </div>
                    {/* Menu icon */}
                    <div onClick={() => setOpen(!open)} className='absolute right-5 top-6 cursor-pointer md:hidden w-7 h-7'>
                        {
                            open ? <FaTimes className="text-[18px]" /> : <FaBarsStaggered className="text-[18px]" />
                        }
                    </div>
                    {/* linke items */}
                    <ul className={` md:flex md:items-center md:pb-0 pb-12 pt-5 cursor-pointer  absolute md:static bg-white-a700 shadow-md z-[-1] md:z-auto left-0 w-full md:w-auto md:pl-0 p-5 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>


                        <li className=" font-semibold py-2 px-1 hover:border transition-all duration-75" onClick={HandleClose} >
                            {/* <a className="cursor-pointer font-semibold text-sm" >Home </a> */}
                            <a href="" className="cursor-pointer font-semibold text-sm ">Home</a>
                        </li>
                        <li className=" font-semibold py-2 px-1 hover:border transition-all" onClick={HandleClose} >
                            {/* <a className="cursor-pointer font-semibold text-sm" >Home </a> */}
                            <a href="" className="cursor-pointer font-semibold text-sm">Service</a>
                        </li>
                        <li className=" font-semibold py-2 px-1 hover:border transition-all" onClick={HandleClose} >
                            {/* <a className="cursor-pointer font-semibold text-sm" >Home </a> */}
                        </li>
                        <li className=" font-semibold py-2 px-1 hover:border transition-all" onClick={HandleClose} >
                            {/* <a className="cursor-pointer font-semibold text-sm" >Home </a> */}
                            <a href="" className="cursor-pointer font-semibold text-sm">About Us</a>
                        </li>

                    </ul>
                    {/* button */}
                </div>
            </div>
        </div>
    );
};

export default Header;
