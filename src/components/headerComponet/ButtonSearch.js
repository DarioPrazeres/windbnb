import React from "react";
import iconSearch from "../imgComponent/search.png";
import openSearchSection from "./openSearch";
export default function SearchCity(){
    return(
        <button className="city-btn" onClick={openSearchSection}>
            <img className="" src={iconSearch} alt="lupa icon"/>
        </button>
    )
}