import React from 'react';
import { IoEyeSharp } from "react-icons/io5";
import datas from '../../data';

const EmployeeList = () => {
    // const datas = [
    //     {
    //         id: 1,
    //         img: "https://www.w3schools.com/images/w3schools_green.jpg",
    //         firstName: "Oluwatosin",
    //         lastName: "Owolabi",
    //         email: "oluwatosin@gmail.com"
    //     },
    //     {
    //         id: 2,
    //         img: "https://www.w3schools.com/images/w3schools_green.jpg",
    //         firstName: "Oluwatosin",
    //         lastName: "Owolabi",
    //         email: "oluwatosin@gmail.com"
    //     },
    //     {
    //         id: 3,
    //         img: "https://www.w3schools.com/images/w3schools_green.jpg",
    //         firstName: "Oluwatosin",
    //         lastName: "Owolabi",
    //         email: "oluwatosin@gmail.com"
    //     },
    //     {
    //         id: 4,
    //         img: "https://www.w3schools.com/images/w3schools_green.jpg",
    //         firstName: "Oluwatosin",
    //         lastName: "Owolabi",
    //         email: "oluwatosin@gmail.com"
    //     },
    //     {
    //         id: 5,
    //         img: "https://www.w3schools.com/images/w3schools_green.jpg",
    //         firstName: "Oluwatosin",
    //         lastName: "Owolabi",
    //         email: "oluwatosin@gmail.com"
    //     }
    // ]
    const resultantDatas = datas.length > 5 ? datas.slice(0, 5) : datas;
    return (
        <div>
            {
                resultantDatas.map((data) => {
                    return (
                        <div className='flex justify-between gap-4 items-center m-2 border-b-2 pb-2' key={data.id}>
                            <div className='block'>
                                <p className='text-xl font-semibold text-[#2A3A60] pb-1'>{data.firstName} {data.lastName}</p>
                                <p className='text-sm text-slate-400 -mt-2'> {data.email} </p>
                            </div>
                            <button
                                className='bg-[#5F7F41] text-white rounded-md shadow flex items-center hover:bg-[#73C63C] border-none py-2 px-3'
                            >
                                <IoEyeSharp className="mr-1" />
                                Display
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EmployeeList;