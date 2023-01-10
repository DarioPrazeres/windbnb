import React from "react";
import openSearchSection from "./openSearch";

export default function SearchCity(){
    return(
        <button className="city-btn" onClick={()=>openSearchSection('city')}>Helsink, Finland</button>
    )
}