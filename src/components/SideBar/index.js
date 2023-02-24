import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoMdPeople, IoMdSettings } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";


const Sidebar = () => {
    const location = useLocation();

    //console.log(location)


    return (
        <div className='h-screen'>
            <div className="shadow-md bg-white h-full max-h-screen hidden md:block z-50 w-[100px] md:w-[250px]">
                <nav className="w-full ">
                    <div className="text-sm md:text-lg text-gray-400 pt-4 pl-2 md:pl-5">MENU</div>
                    <Link to={`/home`}>
                        <div className='mt-6 flex items-center font-semibold transition ease-in-out duration-300'>
                            {
                                location.pathname === '/home' || location.pathname === '/' ?
                                    <div className='py-2 w-1 rounded-r-md bg-[#5F7F41] content-none text-[#5F7F41]'>.</div>
                                    : ''
                            }
                            <div
                                className={`${location.pathname === '/home' || location.pathname === '/' ?
                                    "bg-[#5F7F41] text-white rounded-md px-6 py-2" :
                                    'text-[#5F7F41]'
                                    } ml-2 md:ml-5`}
                            >
                                <div className="flex items-center">
                                    <MdSpaceDashboard className='w-6 h-6 mr-4' />
                                    Dashboard
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/employee`}>
                        <div className='mt-6 flex items-center font-semibold transition ease-in-out duration-300'>
                            {
                                location.pathname === '/employee' ?
                                    <div className='py-2 w-1 rounded-r-md bg-[#5F7F41] content-none text-[#5F7F41]'>.</div>
                                    : ''
                            }
                            <div
                                className={`${location.pathname === '/employee' ?
                                    "bg-[#5F7F41] text-white rounded-md px-6 py-2" :
                                    'text-[#5F7F41]'
                                    } ml-2 md:ml-5`}
                            >
                                <div className="flex items-center">
                                    <IoMdPeople className='w-6 h-6 mr-4' />
                                    Employee
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="text-sm md:text-lg text-gray-400 pt-6 pl-2 md:pl-5">QUICK LINKS</div>
                    <Link to={`/help-and-support`}>
                        <div className='mt-6 flex items-center font-semibold transition ease-in-out duration-300'>
                            {
                                location.pathname === '/help-and-support' ?
                                    <div className='py-2 w-1 rounded-r-md bg-[#5F7F41] content-none text-[#5F7F41]'>.</div>
                                    : ''
                            }
                            <div
                                className={`${location.pathname === '/help-and-support' ?
                                    "bg-[#5F7F41] text-white rounded-md px-6 py-2" :
                                    'text-[#5F7F41]'
                                    } ml-2 md:ml-5`}
                            >
                                <div className="flex items-center">
                                    <BiSupport className='w-6 h-6 mr-4' />
                                    Help & Support
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/faq`}>
                        <div className='mt-6 flex items-center font-semibold transition ease-in-out duration-300'>
                            {
                                location.pathname === '/faq' ?
                                    <div className='py-2 w-1 rounded-r-md bg-[#5F7F41] content-none text-[#5F7F41]'>.</div>
                                    : ''
                            }
                            <div
                                className={`${location.pathname === '/faq' ?
                                    "bg-[#5F7F41] text-white rounded-md px-6 py-2" :
                                    'text-[#5F7F41]'
                                    } ml-2 md:ml-5`}
                            >
                                <div className="flex items-center">
                                    <FaQuestionCircle className='w-6 h-6 mr-4' />
                                    FAQ
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/settings`}>
                        <div className='mt-6 flex items-center font-semibold transition ease-in-out duration-300'>
                            {
                                location.pathname === '/settings' ?
                                    <div className='py-2 w-1 rounded-r-md bg-[#5F7F41] content-none text-[#5F7F41]'>.</div>
                                    : ''
                            }
                            <div
                                className={`${location.pathname === '/settings' ?
                                    "bg-[#5F7F41] text-white rounded-md px-6 py-2" :
                                    'text-[#5F7F41]'
                                    } ml-2 md:ml-5`}
                            >
                                <div className="flex items-center">
                                    <IoMdSettings className='w-6 h-6 mr-4' />
                                    Settings
                                </div>
                            </div>
                        </div>
                    </Link>
                </nav>
            </div >
        </div >
    )
}

export default Sidebar;