import React, { Fragment } from 'react';
import Chart from '../../components/Chart/Chart';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GiVibratingShield } from "react-icons/gi";
import { RiMiniProgramFill } from "react-icons/ri";
import { MdMarkChatRead } from "react-icons/md";
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';

const HomeScreen = () => {
    return (
        <Fragment>
            <Layout sidebar>
                <div className='w-full m-4 h-[86%] overflow-y-auto scrollbar'>
                    <div className='bg-[#5F7F41] text-white w-full p-4 flex justify-between items-center mb-4 shadow rounded-lg'>
                        <div className=''>
                            <img className="w-52 h-40" src="../assets/images3.png" alt="logo" />
                        </div>
                        <div className=''>
                            <div className=''>
                                <span className=''>Lafege Cement Company</span>
                            </div>
                            <div className=''>
                                <span className=''>Session: 1000</span>
                            </div>
                            <div className=''>
                                <span className=''>Program: 6000</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:grid grid-cols-6 gap-4'>
                        <div className='col-span-2 mb-4 md:mb-0'>
                            <Card>
                                <div className='ml-4 mt-2'>
                                    <span className='text-2xl font-semibold text-[#0f172a]'>Rating</span>
                                </div>
                                <div className='flex items-end justify-between mx-4 my-4'>
                                    <GiVibratingShield className='w-12 h-12 text-[#5F7F41]' />
                                    <div>
                                        <p>
                                            From
                                            <span className='font-semibold text-lg text-[#5F7F41] px-2'>234</span>
                                            employee
                                        </p>
                                        <div className='flex items-center text-[#eab308]'>
                                            <FaStar className='w-5 h-5' />
                                            <FaStar className='w-5 h-5' />
                                            <FaStar className='w-5 h-5' />
                                            <FaStar className='w-5 h-5' />
                                            <FaStarHalfAlt className='w-5 h-5 mr-2' />
                                            <span className='text-lg'>(4.7) rating</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='col-span-2 mb-4 md:mb-0'>
                            <Card>
                                <div className='ml-4 mt-2'>
                                    <span className='text-2xl font-semibold text-[#0f172a]'>Program watched</span>
                                </div>
                                <div className='flex items-end justify-between mx-4 my-4'>
                                    <RiMiniProgramFill className='w-12 h-12 text-[#5F7F41]' />
                                    <div>
                                        <p>
                                            <span className='font-semibold text-lg text-[#5F7F41] px-2'>134 programs</span>
                                            from 504 programs available
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='col-span-2'>
                            <Card>
                                <div className='ml-4 mt-2'>
                                    <span className='text-2xl font-semibold text-[#0f172a]'>Session taken</span>
                                </div>
                                <div className='flex items-end justify-between mx-4 my-4'>
                                    <MdMarkChatRead className='w-12 h-12 text-[#5F7F41]' />
                                    <div>
                                        <p>
                                            <span className='font-semibold text-lg text-[#5F7F41] px-2'>134 programs</span>
                                            from 504 programs available
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className='md:grid grid-cols-6 gap-4 mt-4'>
                        <div className='col-span-3 mb-4 md:mb-0'>
                            <Card>
                                <div className='ml-4 mt-2'>
                                    <span className='text-2xl font-semibold text-[#0f172a]'>Programs watched</span>
                                </div>
                                <div className='mt-4 mb-2 mr-2'>
                                    <Chart />
                                </div>
                            </Card>
                        </div>
                        <div className='col-span-3'>
                            <Card>
                                <div className='ml-4 mt-2'>
                                    <span className='text-2xl font-semibold text-[#0f172a]'>Type of sessions taken</span>
                                </div>
                                <div className='mt-4 mb-2 mr-2'>
                                    <Chart />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    )
}

export default HomeScreen;