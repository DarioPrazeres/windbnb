import React from "react";
import iconSearch from "/src/img/logo.png";

export default function SearchCity(){
    return(
        <button className="city-btn">
            <img src={iconSearch} alt="lupa icon"/>
        </button>
    )
}