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
            <TableCell><b>Accessibility Features</b></TableCell>
            <TableCell><b>Hours</b></TableCell>
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
                        <TableCell>{row.features}</TableCell>
                        <TableCell>{row.hours}</TableCell>
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
        "quadrant":"Southwest",
        "address":"5050 Spruce Dr. SW",
        "features":"",
        "hours":""
    },
    {
        "playground":"Elliston",
        "quadrant":"Southeast",
        "address":"1827 68 St. SE",
        "features":"",
        "hours":""
    },
    {
        "playground":"Hidden Hut",
        "quadrant":"Northwest",
        "address":"10504 Hidden Valley Dr NW",
        "features":"",
        "hours":""
    },
    {
        "playground":"South Glenmore Park",
        "quadrant":"Southwest",
        "address":"8415 24 St SW",
        "features":"",
        "hours":""
    },
    {
        "playground":"North Glenmore Park",
        "quadrant":"",
        "address":"",
        "features":"",
        "hours":""
    },
    {
        "playground":"Ramsay Inclusive Park",
        "quadrant":"Southeast",
        "address":"Macdonald Ave SE & Bellevue Ave SE",
        "features":"",
        "hours":""
    },
    {
        "playground":"Sandy Beach Park",
        "quadrant":"Southwest",
        "address":"4500 14A St. SW",
        "features":"",
        "hours":""
    },
    {
        "playground":"Somerset Park",
        "quadrant":"Southwest",
        "address":"999 Somerset Square SW",
        "features":"",
        "hours":""
    },
    {
        "playground":"Ted Harrison Park",
        "quadrant":"Northeast",
        "address":"Taralake Way NE & Taradale Dr NE",
        "features":"",
        "hours":""
    },
    {
        "playground":"Vivo Inclusive Park",
        "quadrant":"Northeast",
        "address":"Country Village Rd NE & Country Village Way NE",
        "features":"",
        "hours":""
    },
    {
        "playground":"Thorncliffe-Greenview",
        "quadrant":"",
        "address":"",
        "features":"",
        "hours":""
    },
    {
        "playground":"Shouldice Inclusive Park",
        "quadrant":"Northwest",
        "address":"4900 Monserrat Dr. NW",
        "features":"",
        "hours":""
    }
]
