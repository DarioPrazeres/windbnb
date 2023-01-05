import React from "react";
import searchIcon from "./imgComponent/searchWhite.png";
import dataFile from "./stays.json";
export default function SearchSeaction() {
    return (
        <section className="search">
            <div className="search-form">
                <div className="input-form">
                    <label>Location</label>
                    <input type='text' placeholder="Add Location"/>
                </div>
                <div className="input-form">
                    <label>Guest</label>
                    <input type='text' placeholder="Add Guest"/>
                </div>
                <div>
                   <button className="submitSearch">
                    <img src={searchIcon} alt="icon search white"/>
                    <p>Search</p>
                   </button>
                </div>
            </div>
            <div className="search-detail">
                <div className="detail-city">City Search</div>
                <div className="detail-guest">Add Guest</div>
            </div>
        </section>
    )
}
function tipsCity(value, datta){
    const result = [];
    if(value === 'All'){
        return datta;
    }else {
        for(var c=0; c<datta.length; c++){
            if(datta[c].city === value){
                result.push(datta[c])
            }           
        }
        return result;
    }
}