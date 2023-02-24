import React from 'react';
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full text-[#2a4365] bg-white shadow-sm py-3 h-[65px] flex justify-between items-center">
        <div className="ml-2 md:ml-5">
            <img className="w-[120px] h-[30px]" src="../assets/Mildstrings-Logo.png" alt="logo" />
        </div>
        <div className="flex items-center mr-2 md:mr-5">
            <img className="w-8 h-8 rounded-full ring-1 ring-[#5F7F41] mr-6" src="../assets/user.jpg" alt="logo" />
            <div className="text-[#5F7F41] cursor-pointer md:hidden transition ease-out duration-500">
                <IoIosMenu className="w-10 h-10" />
            </div>
        </div>
    </div>
  )
}

export default Header;