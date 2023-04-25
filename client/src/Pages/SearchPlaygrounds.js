import { MuiTable } from "../Components/MuiTable.tsx";

import { MuiTable2 } from "../Components/MuiTableFromBackend.tsx"

export default function SearchPlaygrounds() {
    return(
        <>
        <div className="searchbar">
            <input type="text" placeholder="Search..." className="search" />
            <ul className="list">
                
            </ul>
        </div>

        <MuiTable />

        <br />
        <br />

        <MuiTable2 />

        </>
    );
}