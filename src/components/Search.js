import React from "react";
import SearchGuest from "./headerComponet/SearchGuest";
import SearchCity from "./headerComponet/SearchCity";
import ButtonSearch from "./headerComponet/ButtonSearch"
export default function Search(){
    return(
        <section>
            <SearchCity/>
            <SearchGuest/>
            <ButtonSearch/>
        </section>
    )
}