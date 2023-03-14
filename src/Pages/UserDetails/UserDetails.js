import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UsersContext } from '../../App';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



function UserDetails() {
    const { id } = useParams()
    const allUsers = useContext(UsersContext);
    const user = allUsers.find((user) => user.id === Number(id))
    console.log(user)
    return (
        <div className='w-3/6 mx-auto my-7 bg-gray-300 relative p-7 border-2 border-[#692438] rounded-lg'>
            <p className='absolute top-3 left-3 text-xl bg-[#692438] text-white py-2 px-4 border border-white rounded-lg'><ArrowBackIcon /> Back</p>
            <p style={{ fontFamily: 'Bebas Neue' }} className='text-[#692438] text-center text-4xl'>User Details</p>

            <div className='flex  justify-around'>
            <div className='flex '>
                <div className=''>
                    <p>
                        Name
                    </p>
                    <p>
                        Email
                    </p>
                    <p>
                        Phone
                    </p>
                </div>
                <div className=''>
                    <p>
                        :
                    </p>
                    <p>
                        :
                    </p>
                    <p>
                        :
                    </p>
                </div>
                <div className=''>
                    <p>
                        {user?.name}
                    </p>
                    <p>
                        {user?.email}
                    </p>
                    <p>
                        {user?.phone}
                    </p>
                </div>
            </div>

            
            <div className='flex'>
                <div>
                    <p>
                        Name
                    </p>
                    <p>
                        Email
                    </p>
                    <p>
                        Phone
                    </p>
                </div>
                <div>
                    <p>
                        :
                    </p>
                    <p>
                        :
                    </p>
                    <p>
                        :
                    </p>
                </div>
                <div>
                    <p>
                        {user?.name}
                    </p>
                    <p>
                        {user?.email}
                    </p>
                    <p>
                        {user?.phone}
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default UserDetails
