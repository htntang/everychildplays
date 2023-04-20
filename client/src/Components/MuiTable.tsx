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
            <TableCell><b>Playground</b></TableCell>
            <TableCell><b>Quadrant</b></TableCell>
            <TableCell><b>Address</b></TableCell>
            </TableRow>
            </TableHead>
            {
                tableData.map(row => (
                    <TableRow 
                    key = {row.playground}
                    >
                        <TableCell>{row.playground}</TableCell>
                        <TableCell>{row.quadrant}</TableCell>
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
    {
        "playground":"Edworthy",
        "quadrant":"",
        "address":""
    },
    {
        "playground":"Elliston",
        "quadrant":"",
        "address":""
    },
    {
        "playground":"Hidden Hut",
        "quadrant":"",
        "address":""
    },
    {
        "playground":"South Glenmore Park",
        "quadrant":"",
        "address":""
    },
    {
        "playground":"North Glenmore Park",
        "quadrant":"",
        "address":""
    },
    {
        "playground":"Ramsay Inclusive Park",
        "quadrant":"",
        "address":""
    },
    {
        "playground":"Sandy Beach Park",
        "quadrant":"",
        "address":""
    },
    {
        "playground":"Somerset Park",
        "quadrant":"",
        "address":""
    },
    {
        "playground":"Ted Harrison Park",
        "quadrant":"",
        "address":""
    },
    {
        "playground":"Vivo Inclusive Park",
        "quadrant":"",
        "address":""
    },
    {
        "playground":"Thorncliffe-Greenview",
        "quadrant":"",
        "address":""
    }
]
