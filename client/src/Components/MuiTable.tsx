import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import React from 'react';

export const MuiTable = () => {
    return(
    <TableContainer component={Paper}>
        <Table aria-label='simple-table'>
            <TableHead>
            <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Park</TableCell>
            <TableCell>Address</TableCell>
            </TableRow>
            </TableHead>
            {
                tableData.map(row => (
                    <TableRow 
                    key = {row.id}
                    sx = {{ '&:last-child td, &:last-child th' : {border:0} }}
                    >
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.playground}</TableCell>
                        <TableCell>{row.address}</TableCell>
                    </TableRow>
                ))
            }
            <TableBody></TableBody>
        </Table>
    </TableContainer>
    )   
}

const tableData = 
[
    {"id":"3479:eafe:1f5e:32e9:29d:ee8b:add9:4546/55","playground":"Ali-Sabieh","address":17.8643499},
    {"id":"4737:7a9e:b03a:86b5:f339:9563:41ae:7d5d/22","playground":"Berdyansk","address":13.6263627},
    {"id":"88b3:a39e:df84:6d7a:b341:4e84:3241:528d/59","playground":"Shouldice","address":-87.606295},
    {"id":"5cab:4e34:6b0f:a35b:96e4:aa1b:4814:6e71/68","playground":"Stillwater","address":130.0510793}
]
