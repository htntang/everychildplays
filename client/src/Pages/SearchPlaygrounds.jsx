import {useState, useEffect} from "react";
import React from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function SearchPlaygrounds() {
    const [searchTerm, setSearchTerm] = useState ("");
    
const rows = [
    { id: 1, Location: 'Hello', AccessibilityFeatures: 'World' },
    { id: 2, Location: 'Hello2', AccessibilityFeatures: 'World2' },
    { id: 3, Location: 'Hello3', AccessibilityFeatures: 'World3' },
    { id: 4, Location: 'Hello3', AccessibilityFeatures: 'World3' },
   
  ];
const columns = [
    {field:'Name', headerName: 'Name'},
    {field:'Quadrant', headerName:'Quadrant'},
    {field:'Address', headerName: 'Address'},
    {field: 'Neighbourhood', headerName:'Neighbourhood'},
    {field:'Age Range', headerName:'Age Range'},
    {field:'Accessibility Features', headerName: 'Accessibility Features'},
];

const [fetchedData, setFetchedData] = React.useState(null);


        function populateRows(){
            fetch('http://localhost:5005/api/playgrounds')
            .then(response => response.json()) 
      .then(data => { console.log(data
        );
        setFetchedData({
        dataSet: data, 
        rowLength: 100,
        })});
        }
    
    return(
        <>
        <div className="searchbar" style={{ height: 400, width: '100%' }}>
            <input type="text" 
                    placeholder="Search..." 
                    className="search"
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} /> 
            <DataGrid 
            sx = {{ fontWeight:'bold', backgroundColor:'#ffffff'}}
            rows={rows}
            columns={[
                    {field:'Name', width:150},
                    {field:'Address', width:200},
                    {field:'Quadrant', width:100},
                    {field:'Neighbourhood', width:200},
                    {field:'Age Range', width: 100},
                    {field:'Accessibility Features', width:200}
                    ]} />
        </div>
        </>
    );
}