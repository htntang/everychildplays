import { MuiTable2 } from "../Components/MuiTableFromBackend.tsx"
import {useState, useEffect} from "react";
import axios from "axios";


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
        const fetchData = async () => {
          try {
            const response = await axios.get<MyDocument['']>(
              "http://localhost:5005/api/playgrounds"
            );
            setPlaygroundResults(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, [searchTerm]);


    useEffect(() => {
    const filteredResults = playgroundResults.filter((result) => {
        let include = true;
            if (filters.accessibilityFeatures) {
                include = include && result.accessibilityFeatures;
            }
            if (filters.safetyFeatures) {
                include = include && result.securityCamera;
            }
            // add additional filters here
            
            return
            include && result.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredResults(filteredResults);
      }, [playgroundResults, searchTerm, filters]);

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

    
    return(
        <>
        <div className="searchbar">
            <input type="text" 
                    placeholder="Search..." 
                    className="search"
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} /> 
        {/* <button onClick={searchTerm}>Filter</button> */}
        <div className="filters">
                <label htmlFor="accessibilityFeaturesFilter">
                    <input type="checkbox"
                           id="accessibilityFeaturesFilter"
                           checked={filters.accessibilityFeatures}
                           onChange={(event) => {
                               setFilters({...filters, accessibilityFeatures: event.target.checked})
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
            <MuiTable2 data={filteredResults.length >0? filteredResults: playgroundResults}/>
            </li>
            </ul>
        </div>
        </>
    );
}