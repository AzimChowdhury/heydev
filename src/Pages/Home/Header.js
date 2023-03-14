import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/Ardeo_Education_Solutions_Logo.jpg';


function Header() {
    return (
        <div> 
            <div className='flex items-center'>
               <Link className='w-36 mx-auto py-2' to='/'> <img  src={Logo} alt="" /></Link>
               <Link to='/allusers'> <p  style={{ fontFamily: 'Bebas Neue' }}  className='text-xl mr-12 text-gray-800'>All Users</p></Link>
            </div>
        </div>
    )
}

export default Header;
