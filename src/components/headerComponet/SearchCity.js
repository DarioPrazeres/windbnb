import React from "react";
import openSearchSection from "./openSearch";
import { useSelector } from "react-redux";

export default function SearchCity(){
    const nameCity = useSelector((state)=>state.city.value)
    return(
        <button className="city-btn" onClick={()=>openSearchSection('city')}>{nameCity==='All'?'Helsinki':nameCity}, Finland</button>
    )
}