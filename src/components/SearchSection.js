import React from "react";
import searchIcon from "./imgComponent/searchWhite.png"
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
        </section>
    )
}