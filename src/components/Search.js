import React from "react";
import SearchGuest from "./headerComponet/SearchGuest";
import SearchCity from "./headerComponet/SearchCity";
import ButtonSearch from "./headerComponet/ButtonSearch";
import file from "../components/stays.json";
var dataVar = file
export default function Search(){
    console.table(dataVar)
    return(
        <section className="searchSection">
            <SearchCity/>
            <SearchGuest/>
            <ButtonSearch/>
        </section>
    )
}