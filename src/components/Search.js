import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";

export default function Search({ onSearch }) {
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (e) => {
        const text = e.target.value;
        setSearchText(text);
        onSearch(text);
    };

    return (
        <div className="search">
            <div className="icon">
                <GrSearch />
            </div>
            <input
                type="text"
                placeholder="Search Brands"
                value={searchText}
                onChange={handleInputChange}
            />
        </div>
    );
}
