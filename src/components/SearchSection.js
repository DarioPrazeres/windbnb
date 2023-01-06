import React from "react";
import searchIcon from "./imgComponent/searchWhite.png";
//import dataFile from "./stays.json";
import gpsIcon from "./imgComponent/gpsIcon.png";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../action/cartAction";

const cities =[
    "Helsinki",
    "Vaasa",
    "Turku",
    "Oulu"
]

export default function SearchSeaction() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = e =>{
        setSearchTerm(e.target.value);
    };
    //Redux Aqui
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

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
                    <input type='number' placeholder="Add Guest"/>
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
                    <div className="addGuest">
                        <h3>Adults</h3>
                        <p className="rating">Ages 13 or above</p>
                        <div className="control-Add">
                            <button className="controls"
                            onClick={() => {
                                dispatch(addItem());
                              }}>-</button>
                            <p className="cityname">{state.numOfItems}</p>
                            <button className="controls control-add"
                            disabled={state.numOfItems > 0 ? false : true}
                            onClick={() => {
                              dispatch(deleteItem());
                            }}>+</button>
                        </div>
                    </div>
                    <div className="addGuest-child">
                        <h3>Children</h3>
                        <p className="rating">Ages 2-13</p>
                        <div className="control-Add">
                            <button className="controls">-</button>
                            <p className="cityname">0</p>
                            <button className="controls control-add">+</button>
                        </div>
                    </div>
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