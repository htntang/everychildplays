import { MuiTable } from "../Components/MuiTable.tsx";
import {useState, useEffect} from "react";

export default function SearchPlaygrounds() {
    const [playgroundResults, setPlaygroundResults] =useState([]);
    const [searchTerm, setSearchTerm] = useState ("");
    const [filteredResults, setFilteredResults] = useState([]);
    const [filters, setFilters] = useState({
        accessibilityFeatures: false,
        safetyFeatures: false,
         // add additional filters here
    });

    useEffect(() => {
    const filteredResults = playgroundResults.filter((result) => {
        let include = true;
            if (filters.accessibilityFeatures) {
                include = include && result.fencing;
            }
            if (filters.safetyFeatures) {
                include = include && result.securityCamera;
            }
            // add additional filters here
            
            return include && result.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredResults(filteredResults);
      }, [playgroundResults, searchTerm]);

      const handleFilter = (filterTerm) => {
        const filteredResults = playgroundResults.filter((result) => {
          if (filterTerm === "accessibilityFeatures") {
            return result.accessibilityFeatures === true;
          } else if (filterTerm === "safetyFeatures") {
            return result.safety_features === true;
          }
          return true;
        });
        setFilteredResults(filteredResults);
      };

    useEffect(() => {
        fetch ("https://localhost:5005/api/playgrounds")
        .then((response) => response.json())
        .then((json) => setPlaygroundResults(json.data))
    }, [searchTerm])
    
    
    return(
        <>
        <div className="searchbar">
            <input type="text" 
                    placeholder="Search..." 
                    className="search"
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} /> 
        <button onClick={searchTerm}>Filter</button>
        <div className="filters">
                <label htmlFor="accessibilityFeaturesFilter">
                    <input type="checkbox"
                           id="accessibilityFeaturesFilter"
                           checked={filters.accessiblityFeatures}
                           onChange={(event) => {
                               setFilters({...filters, accessiblityFeatures: event.target.checked})
                           }} />
                    Accessibility Features
                </label>
                <label htmlFor="safetyFeaturesFilter">
                    <input type="checkbox"
                           id="safetyFeaturesFilter"
                           checked={filters.safetyFeatures}
                           onChange={(event) => {
                               setFilters({...filters, safetyFeatures: event.target.checked})
                           }} />
                    Safety Features
                </label>
                
                {/* add additional filters here */}
            </div>

            <ul className="list">
            <li className="listItem">
            <MuiTable data={filteredResults.length >0? filteredResults: playgroundResults}/>
            </li>
            </ul>
        </div>
        </>
    );
}