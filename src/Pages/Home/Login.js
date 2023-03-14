import React, { useContext } from 'react';
import logo from '../../assets/university_logo.png';
import Box from '@mui/material/Box';
import './Banner.css';
import Swal from 'sweetalert2';
import { UserContext } from '../../App';




function Login() {
    const { setUser } = useContext(UserContext);
    const registered = JSON.parse(localStorage.getItem('user'))
    const handleRegistration = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const secondName = e.target.secondName.value;
        const emailAddress = e.target.emailAddress.value;
        const user = { "name": firstName + " " + secondName, "email": emailAddress }
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
        e.target.reset()
        Swal.fire(
            'Successful',
            'Your registration is successful!',
            'success'
        )
    }

    const handleLogin = (e)=> { 
        const email  = document.getElementById('email')?.value;  
        if(registered.email === email){
            setUser(registered)
            Swal.fire(
                'Successful',
                ' successfully Logged in!',
                'success'
            )
        }else{
            Swal.fire(
                'Failed',
                'Failed to login!',
                'error'
            )
        }

    }


    return (
        <div>
            <div className='bg-white w-96 pb-5'>
                <img className='w-40 pt-6 pl-28 pb-0 mb-0' src={logo} alt="" />
                <div className='pt-0 mt-0'>
                    <h1 className='text-4xl font-bold text-center py-0 my-0 font'>Seattle pacific</h1>
                    <p className='text-xl font-bold text-center pt-0 mt-0 leading-4 font'>university</p>
                    <h1 className='text-3xl font-bold text-center py-2 text-[#211B1B]'>Get covered</h1>
                    <p className='text-md text-center px-16 text-[#69696A]'>Accept your LRAP Award now. at no cost to you.</p>

                    <form onSubmit={handleRegistration}>
                        <div
                            // component="form"
                            // sx={{
                            //     '& > :not(style)': { m: 1, width: '100%' },
                            // }}
                            className="pl-5 pr-10  "

                        >
                            <input required className='inputField' type="text" name="firstName" placeholder='Student first name' />
                            <input required className='inputField' type="text" name="secondName" placeholder='Student second name' />
                            <input required className='inputField' id='email' type="email" name="emailAddress" placeholder='Student email address' />



                            <p className='tracking-tight flex py-3'><input type='checkbox' defaultChecked className='mr-4 ml-2 ' /> <span className='closer mt-[-10px]  leading-5 '>I confirm that I receive and accept my LRAP Award</span></p>
                            {
                                registered ?
                                    <button type='reset' onClick={() => handleLogin()} className='w-full text-lg bg-[#BB202E] text-white p-3 leading-3'>Login</button>
                                    :
                                    <button type="submit" className='w-full text-lg bg-[#BB202E] text-white p-3 leading-3'>Registration</button>
                            }
                            <p className='closer leading-5 py-3'>Check the box and click the accept button above to accept your LRAP Award at no or commitment. Accepting your award simply confirms your covered if you enroll at [clint]</p>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default Login
