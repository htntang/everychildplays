import {useState, useEffect} from "react";
import React from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function SearchPlaygrounds() {
   
    const [rows, setRows] = useState([])

const columns = [
    {field:'Name', headerName: 'Name'},
    {field:'Quadrant', headerName:'Quadrant'},
    {field:'Address', headerName: 'Address'},
    {field: 'Neighbourhood', headerName:'Neighbourhood'},
    {field:'Age Range', headerName:'Age Range'},
    {field:'Accessibility Features', headerName: 'Accessibility Features'},
];

const [fetchedData, setFetchedData] = React.useState(null);

useEffect(() => {
    populateRows()
}, [])
        function populateRows(){
            fetch('http://localhost:5005/api/playgrounds')
            .then(response => response.json()) 
      .then(data => { console.log(data
        );
        setRows(data)
        setFetchedData({
        dataSet: data, 
        rowLength: 100,
        })});
        }
    
    return(
        <>
        <div>
            <DataGrid 
            sx = {{backgroundColor:'#ffffff', height:600, width: "100%"}}
            rows={rows}
            slots={{toolbar: GridToolbar}} 
            getRowId={(row) => row._id}
            columns={[
                    {field:'name', width:150, headerName: 'Name'},
                    {field:'location', width:200, headerName: 'Address'},
                    {field:'quadrant', width:100, headerName: 'Quadrant'},
                    {field:'neighbourhood', width:200, headerName: 'Neighbourhood'},
                    {field:'ageRange', width: 100, headerName: 'Age Range'},
                    {field:'accessibilityFeatures', width:200, headerName: 'Accessibility Features'},
                    {field:'safetyFeatures', width:200, headerName: 'Safety Features'}
                    ]} />   
        </div>
        </>
    );
}