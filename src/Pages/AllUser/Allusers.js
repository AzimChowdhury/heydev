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
import { VpnKey } from '@mui/icons-material';


const useStyles = makeStyles({
    hover: {
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "#b4bac2", 
        }
    }
});



function AllUsers() {
     const allUsers = useContext(UsersContext);
    const classes = useStyles();
    const navigate = useNavigate()


    


    return (
        <div>
            <h1 style={{ fontFamily: 'Bebas Neue' }} className='text-4xl text-center my-5 text-[#692438] '>All users</h1>

            <TableContainer >
                <Table  sx={{ minWidth: 650, maxWidth: 900 }} className='lg:mx-auto mx-5 bg-gray-300 border-2 border-[#692438]' aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell  style={{borderBottom:"1px solid #692438"}} align='center'>Name</TableCell>
                            <TableCell style={{borderBottom:"1px solid #692438"}} align="center">Email</TableCell>
                            <TableCell style={{borderBottom:"1px solid #692438"}} align="center">Phone</TableCell>
                            <TableCell style={{borderBottom:"1px solid #692438"}} align="center">Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allUsers.map((user) => ( 
                                <TableRow onClick={()=>navigate(`/user/${user?.id}`)}
                                    className={classes.hover}
                                    key={user?.name}
                                >
                                    <TableCell style={{borderBottom:"1px solid #692438"}}  align="center">{user?.name}</TableCell>
                                    <TableCell style={{borderBottom:"1px solid #692438"}} align="center">{user?.email}</TableCell>
                                    <TableCell style={{borderBottom:"1px solid #692438"}} align="center">{user?.phone}</TableCell>
                                    <TableCell style={{borderBottom:"1px solid #692438"}} align="center">{user?.address?.street}, {user?.address?.city}</TableCell>
                                </TableRow> 
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default AllUsers
