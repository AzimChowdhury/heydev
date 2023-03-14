import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../../App';
import Logo from '../../assets/Ardeo_Education_Solutions_Logo.jpg';


function Header() {
    const { user, setUser } = useContext(UserContext)

    const handleLogout = () => {
        setUser(null)
        Swal.fire(
            'Successful',
            'successfully logged out!',
            'success'
        )
    }
    return (
        <div>
            <div className='flex items-center'>
                <Link className='w-36 mx-auto py-2' to='/'> <img src={Logo} alt="" /></Link>
                
                {
                    !user ? "" :
                        <div className='flex'>
                            <Link to='/allusers'> <p style={{ fontFamily: 'Bebas Neue' }} className='text-xl mr-12 text-gray-600'>All Users</p></Link>
                            <p style={{ fontFamily: 'Bebas Neue' }} className='text-xl mr-12 text-gray-600'>{user?.name}</p>
                            <p onClick={() => handleLogout()} style={{ fontFamily: 'Bebas Neue' }} className='text-xl mr-12 text-gray-600 cursor-pointer'>Logout</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default Header;
