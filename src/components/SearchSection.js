import React from "react";
import searchIcon from "./imgComponent/searchWhite.png";
import dataFile from "./stays.json";
import gpsIcon from "./imgComponent/gpsIcon.png";
//Import Control
import ControlChild from "./controlGuest/ControlChild";
import ControlAdult from "./controlGuest/ControlAdult";
import { useSelector, useDispatch } from "react-redux";
import openSearchSection from "./headerComponet/openSearch";
import { newCity } from "../features/counter/nameCity";
import {newSearch} from "../features/counter/search";

const cities = [
    "Helsinki",
    "Vaasa",
    "Turku",
    "Oulu"
]

export default function SearchSeaction() {
    const nameCity = useSelector((state) => state.city.value);
    const search = useSelector((state)=> state.searchCity.value);
    const dispatch = useDispatch();
    const countT = useSelector((state) => state.counterT.value);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
        dispatch(newCity(searchTerm));
    };
    React.useEffect(() => {
        const results = cities.filter(city => city.toLocaleLowerCase().includes(searchTerm));
        setSearchResults(results);
    }, [searchTerm]);
    return (
        <section className="search">
            <div className="search-form">
                <div className="input-form cityForm" onClick={() => openSearchSection('city')}>
                    <label>Location</label>
                    <input type='text' placeholder="Add Location" value={searchTerm} onChange={handleChange} />
                </div>
                <div className="input-form guest-form" onClick={() => openSearchSection('guest')} >
                    <label>Guest</label>
                    <p>{countT} guests</p>
                </div>
                <div>
                    <button className="submitSearch" onClick={()=>{
                        console.log(search);
                        hideSearchSection();
                        dispatch(newSearch(searchParameter(nameCity, countT)));
                        console.log(search);
                    }}>
                        <img src={searchIcon} alt="icon search white" />
                        <p>Search</p>
                    </button>
                </div>
            </div>
            <div className="search-detail">
                <div className="detail-city">
                    {
                        searchResults.map(item => (
                            <CitySearch cityName={item} />
                        ))
                    }
                </div>
                <div className="detail-guest">
                    <ControlAdult />
                    <ControlChild />
                </div>

            </div>
        </section>
    )
}
function CitySearch(props) {
    const nameCity = useSelector((state) => state.city.value);
    const dispatch = useDispatch();
    return (
        <div className="tipsCity" onClick={() => {
            if (props.cityName !== undefined) {
                dispatch(newCity(props.cityName));
                console.log(nameCity)
            }
            hideSearchSection();            
        }}>
            <img src={gpsIcon} alt="item of location" />
            <p>{props.cityName}, Finland</p>
        </div>
    )
}
function hideSearchSection() {
    const searchSeaction = document.querySelector
        ('section.search');
    searchSeaction.style.display = 'none';
}
export function searchParameter(city, guests){
    var datta = dataFile;
    const result = [];
    if (city === 'All') {
        return datta;
    } else {
        for (var c = 0; c < datta.length; c++) {
            if ((datta[c].city === city) && (datta[c].maxGuests >= guests)) {
                result.push(datta[c]);
            }
        }
        return result;
    }
}