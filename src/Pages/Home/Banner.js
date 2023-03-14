import React from 'react';

import banner from '../../assets/banner.jpg';
import './Banner.css';
import Login from './Login';
import shape from '../../assets/shape.png'  


function Banner() {
    return (
        <div>


            <div className='relative'>
                <img className='w-full banner ' src={banner} alt="" />
                <div className='p-absolute text-4xl font-bold text-white'>
                    <div className='flex mb-3'>
                        <p className='pb-5 pt-2 text-center w-40 bg-[#692438]'>pursue</p><p className='pb-5 pt-2 px-5 bg-[#BB202E]'>your passions</p>

                    </div>
                    <div className='flex'>
                        <p className='pb-5 pt-2 text-center w-40 bg-[#692438]'>secure</p><p className='pb-5 pt-2 pl-5 pr-20 bg-[#BB202E]'>your peace of mind</p>
                    </div>
                </div>


                <div className='p-absolute-login'>
                    <Login />
                </div>
            </div>
            <div className='mt-[-60px] z-50 relative'>
                <div className='w-3/6 bg-[#692438] text-white mx-auto flex p-3 font-semibold'>
                    <p className='w-3/12'><img className='w-3/6 mx-auto' src={shape} alt="" /></p>
                    <p className='w-9/12 ml-5'>At Seattle Pacific University, we have partnered with Ardeo to help you protect your college investment with a loan Repayment assistance benefit called LRAP - at no cost to you. </p>
                </div>
                <div className='w-3/6 bg-white text-[#692438]  mx-auto flex '>
                    <p className='w-3/12 border text-center  border-[#692438] p-3 pt-5 text-3xl font-bold'>$46,000</p>
                    <p className='w-9/12 border border-[#692438] p-3 text-lg font-semibold pl-5'>If you earn less than $46,000 after graduation, we can help repay your student loans.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
