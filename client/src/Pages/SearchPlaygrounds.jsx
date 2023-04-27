import {useState, useEffect} from "react";
import React from "react";
import { DataGrid, GridToolbar, } from '@mui/x-data-grid';

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
    {field:'Location', headerName: 'Location'},
    {field:'Accessibility Features', headerName: 'Accessibility Features'}
];

const [fetchedData, setFetchedData] = React.useState(null);


        function populateRows(){
            fetch('http://localhost:5005/api/playgrounds')
            .then(response => response.json()) 
      .then(data => { console.log(data
        );
        setFetchedData({
        dataSet: data, 
        })});
        }
    
    return(
        <>
        <div className="searchbar">
            <input type="text" 
                    placeholder="Search..." 
                    className="search"
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} /> 
           
            <DataGrid 
            rows={rows} 
            columns={columns} />
        </div>
        </>
    );
}