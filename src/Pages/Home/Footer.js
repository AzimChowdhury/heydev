import React, { useEffect, useState } from 'react';
import './Footer.css';



function Footer() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('featuredCompany.json')
        .then(res=>res.json())
        .then(setCompanies)
    }, []);

    return (
        <div className='w-9/12 mx-auto mt-24'>
            <p className='text-center mb-3 text-[#5A5A5B] text-xl font-semibold'>As Featured In</p>
            <div className='flex justify-between'>
                {
                    companies?.map(company=>
                        <img src={company?.image} alt=""/>
                        )
                }
            </div>
            <div className='flex mt-10'>
                <div>
                    <h3 className='h3'>About Ardeo Educational Solutions</h3>
                    <p className='footerP'>Ardeo partners with collages across the U.S. to help <br/> students overcomes the burden of student loans.</p>
                </div>

                <div className='ml-20'>
                    <h3 className='h3'>Contact Us</h3>
                    <p  className='footerP' >P.O. Box 1476</p>
                    <p  className='footerP' >Bloomington, IN 47402</p>
                    <p  className='footerP' >info@myLRAP.org</p>
  
                    <p  className='footerP mt-5 mb-2 ' ><span className='text-black font-bold'>P</span> <span>877.936.5727</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
