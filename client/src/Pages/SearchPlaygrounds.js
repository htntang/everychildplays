import { MuiTable2} from "../Components/MuiTableFromBackend.tsx"
import {useState, useEffect} from "react";
import React from "react";

export default function SearchPlaygrounds() {
    const [playgroundResults, setPlaygroundResults] =useState([]);
    const [searchTerm, setSearchTerm] = useState ("");
    const [filteredResults, setFilteredResults] = useState([]);
    

    const [fetchedData, setFetchedData] = React.useState(null);

    function fetchData() {
        fetch('http://localhost:5005/api/playgrounds')
      .then(response => response.json())
      .then(data => setFetchedData(data));
    };
    


    
    return(
        <>
        <div className="searchbar">
            <input type="text" 
                    placeholder="Search..." 
                    className="search"
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} /> 

            <ul className="list">
            <li className="listItem">
            <MuiTable2 data={filteredResults.length >0? filteredResults: playgroundResults}/>
            </li>
            </ul>
        </div>
        </>
    );
}