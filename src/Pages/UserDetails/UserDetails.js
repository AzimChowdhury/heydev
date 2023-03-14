import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UsersContext } from '../../App';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



function UserDetails() {
    const { id } = useParams()
    const allUsers = useContext(UsersContext);
    const user = allUsers.find((user) => user.id === Number(id))
    const navigate = useNavigate()
    



    return (
        <div className='lg:w-4/6 w-11/12 mx-auto mt-20 bg-gray-300 relative p-7 border-2 border-[#692438] rounded-lg'>
            <p onClick={()=>navigate(-1)} className='cursor-pointer absolute top-5 left-5 text-xl bg-[#692438] text-white py-2 px-4 border border-white rounded-lg'><ArrowBackIcon /> Back</p>
            <p style={{ fontFamily: 'Bebas Neue' }} className='text-[#692438] lg:text-center text-right text-4xl'>User Details</p>

            <div className='lg:flex  justify-around'>
                <div className='flex justify-around  text-lg py-5'>
                    <div className='mr-2  '>
                        <p className='py-1'>
                            Name
                        </p>
                        <p className='py-1'>
                            Email
                        </p>
                        <p className='py-1'>
                            Phone
                        </p>
                    </div>
                    <div className='mr-3  '>
                        <p className='py-1'>
                            :
                        </p>
                        <p className='py-1'>
                            :
                        </p>
                        <p className='py-1'>
                            :
                        </p>
                    </div>
                    <div className='  '>
                        <p className='py-1'>
                            {user?.name}
                        </p>
                        <p className='py-1'>
                            {user?.email}
                        </p>
                        <p className='py-1'>
                            {user?.phone}
                        </p>
                    </div>
                </div>


                <div className='flex justify-around text-lg py-5'>
                    <div className='mr-2  '>
                        <p className='py-1'>
                            Website
                        </p>
                        <p className='py-1'>
                            Company
                        </p>
                        <p className='py-1'>
                            Catchphrase
                        </p>
                    </div>
                    <div className='mr-3  '>
                        <p className='py-1'>
                            :
                        </p>
                        <p className='py-1'>
                            :
                        </p>
                        <p className='py-1'>
                            :
                        </p>
                    </div>
                    <div className='  '>
                        <p className='py-1'>
                            {user?.website}
                        </p>
                        <p className='py-1'>
                            {user?.company?.name}
                        </p>
                        <p className='py-1'>
                            {user?.company?.catchPhrase}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
