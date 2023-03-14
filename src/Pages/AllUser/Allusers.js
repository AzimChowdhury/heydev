import React, { useContext  } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Allusers.css'
import { makeStyles } from '@material-ui/core';
import {  useNavigate } from 'react-router-dom';
import { UsersContext } from '../../App';


const useStyles = makeStyles({
    hover: {
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "#d7e1f9"
        }
    }
});



function AllUsers() {
     const allUsers = useContext(UsersContext);
    const classes = useStyles();
    const navigate = useNavigate()


    


    return (
        <div>
            <h1 style={{ fontFamily: 'Bebas Neue' }} className='text-4xl text-center my-5'>All users</h1>

            <TableContainer >
                <Table sx={{ minWidth: 650, maxWidth: 900 }} className='mx-auto bg-gray-200 border border-gray-300' aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allUsers.map((user) => ( 
                                <TableRow onClick={()=>navigate(`/user/${user?.id}`)}
                                    className={classes.hover}
                                    key={user?.name}
                                >
                                    <TableCell align="center">{user?.name}</TableCell>
                                    <TableCell align="center">{user?.email}</TableCell>
                                    <TableCell align="center">{user?.phone}</TableCell>
                                    <TableCell align="center">{user?.address?.street}, {user?.address?.city}</TableCell>
                                </TableRow> 
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default AllUsers
