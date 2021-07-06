import React, {useState} from "react";

function SearchBar(){

    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event =>{
        setSearchTerm(event.target.value)
    }

    return(
        <div className="SearchBox">
            <input
                    className="SearchBox_Input"
                    type="text"
                    placeholder="e.g. aRofl"
                    value={searchTerm}
                    onChange={handleChange}
            />
            <button className="SearchBox_Input_Button" type="submit">Go</button>

        </div>
    );
}

export default SearchBar