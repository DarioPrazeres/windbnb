import React from "react";
import searchIcon from "./imgComponent/searchWhite.png";
//import dataFile from "./stays.json";
import gpsIcon from "./imgComponent/gpsIcon.png";
//Import Control
import ControlChild from "./controlGuest/ControlChild";
import ControlAdult from "./controlGuest/ControlAdult";
import { useSelector, useDispatch } from "react-redux";

const cities =[
    "Helsinki",
    "Vaasa",
    "Turku",
    "Oulu"
]

export default function SearchSeaction() {
    const countT = useSelector((state) => state.counterT.value);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = e =>{
        setSearchTerm(e.target.value);
    };
    React.useEffect(()=>{
        const results = cities.filter(city => city.toLocaleLowerCase().includes(searchTerm));
        setSearchResults(results);
    }, [searchTerm])
    return (
        <section className="search">
            <div className="search-form">
                <div className="input-form cityForm" onClick={displayItem}>
                    <label>Location</label>
                    <input type='text' placeholder="Add Location" value={searchTerm} onChange={handleChange} />
                </div>
                <div className="input-form" >
                    <label>Guest</label>
                    <p>{countT}guests</p>
                </div>
                <div>
                   <button className="submitSearch">
                    <img src={searchIcon} alt="icon search white"/>
                    <p>Search</p>
                   </button>
                </div>
            </div>
            <div className="search-detail">
                <div className="detail-city invisibility">
                    {
                        searchResults.map(item => (
                            <CitySearch cityName={item} />
                        ))
                    }
                </div>
                <div className="detail-guest">
                    <ControlAdult/>
                    <ControlChild/>
                </div>
                
            </div>
        </section>
    )
}
function CitySearch(props){
    return (
        <div className="tipsCity">
            <img src={gpsIcon} alt="item of location" />
            <p>{props.cityName}, Finland</p>
        </div>
    )
}
function displayItem(){
    const detail = document.querySelector('div.detail-city');
    const cityForm = document.querySelector('div.cityForm');
    cityForm.classList.add('borderFocus')
    detail.classList.remove('invisibility');
    detail.classList.add('visibility');
}