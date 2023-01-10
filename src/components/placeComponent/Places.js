import React from "react";
import file from "../stays.json";
import starIcon from "../imgComponent/star.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { searchParameter } from "../SearchSection";
var dataVar = file;

export default function Places() {
    const city = useSelector((state)=>state.city.value)
    const search = useSelector((state)=> state.searchCity.value)
    const qtdRoom = useSelector((state) => state.counterT.value);
    const [qtd, setQtd] = useState(0);
    const [cityName, setCityName] = useState('All');
    const [hostComponent, setHost] = useState(searchParameter(cityName, qtd));
    
    useEffect(()=>{
        setCityName(city);
        setQtd(qtdRoom)
        setHost(searchParameter(city, qtd));
    }, [city, qtdRoom])
    return (
        <section className="placeSection">
            <div className="title-place">
                <h1>Stays in Finland</h1>
                <p>{dataVar.length - 2}+ stays</p>
            </div>
            <section className="hosts">
                {hostComponent.map((data) =>
                    <Banner key={data.id} datta={data} />
                )}
            </section>
        </section>
    )
}
function BannerImg(props) {
    return <img src={props.photo} alt="banner" className="bannerHost" />
}
function Banner(props) {
    return (
        <div className="host-section">
            <BannerImg photo={props.datta.photo} />
            <div className="hostDetail">
                <span className="super" style={{ display: styleSuperGuest(props.datta.superHost) }}>Super Host</span>
                <p className="type">{props.datta.type}</p>
                <div className="rating">
                    <img src={starIcon} alt="star rating" />
                    <p>{props.datta.rating}</p>
                </div>
            </div>
            <h3>{props.datta.title}</h3>
        </div>
    )
}
function styleSuperGuest(value) {
    if (value === true) {
        return 'block';
    } else {
        return 'none'
    }
}
function searchHouse(cty, guests) {
    var datta = dataVar;
    const result = [];
    if (cty === 'All') {
        return datta;
    } else {
        for (var c = 0; c < datta.length; c++) {
            if ((datta[c].city === cty) && (datta[c].maxGuests>=guests)) {
                result.push(datta[c]);
            }
        }
        return result;
    }
}