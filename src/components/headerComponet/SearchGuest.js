import React from "react";
import openSearchSection from "./openSearch";
export default function SearchGuest(){
    return(
        <button className="guest-btn" onClick={()=>openSearchSection('guest')}>Add guest</button>
    )
}