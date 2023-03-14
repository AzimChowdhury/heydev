import React, { useContext } from 'react';

import banner from '../../assets/banner.jpg';
import './Banner.css';
import Login from './Login';
import shape from '../../assets/shape.png'
import { UserContext } from '../../App';


function Banner() {
    const { user } = useContext(UserContext)


    return (
        <div className=''>


            <div className='relative'>
                <img className='w-full banner ' src={banner} alt="" />
                <div className='p-absolute lg:text-4xl sm:text-xl font-bold text-white'>
                    <div className='flex mb-3'>
                        <p className='lg:pb-5 pb-3 pt-1 lg:pt-2 text-center lg:w-40 w-28 bg-[#692438]'>pursue</p><p className='lg:pb-5 pb-3 pt-1 lg:pt-2 px-5 bg-[#BB202E]'>your passions</p>

                    </div>
                    <div className='flex'>
                        <p className='lg:pb-5 pb-3 pt-1 lg:pt-2 text-center lg:w-40 w-28 bg-[#692438]'>secure</p><p className='lg:pb-5 pb-3 pt-1 lg:pt-2 pl-5 lg:pr-20 pr-5 bg-[#BB202E]'>your peace of mind</p>
                    </div>
                </div>


                <div className='p-absolute-login lg:absolute'>
                   { !user && <Login />}
                </div>
            </div>
            <div className='lg:mt-[-60px] z-50 relative'>
                <div className='lg:w-3/6   bg-[#692438] text-white mx-auto flex p-3 font-semibold'>
                    <p className='lg:w-3/12'><img className='lg:w-3/6 mx-auto' src={shape} alt="" /></p>
                    <p className='lg:w-9/12 ml-5'>At Seattle Pacific University, we have partnered with Ardeo to help you protect your college investment with a loan Repayment assistance benefit called LRAP - at no cost to you. </p>
                </div>
                <div className='lg:w-3/6 sm:w-5/6 bg-white text-[#692438]  mx-auto flex '>
                    <p className='lg:w-3/12 border text-center  border-[#692438] p-3 pt-5 lg:text-3xl font-bold'>$46,000</p>
                    <p className='lg:w-9/12 border border-[#692438] p-3 text-lg font-semibold pl-5'>If you earn less than $46,000 after graduation, we can help repay your student loans.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
