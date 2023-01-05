import React from "react";
import file from "../stays.json";
import starIcon from "../imgComponent/star.png"
var dataVar = file;

export default function Places() {
    var hostComponent =  searchExemple('All', dataVar);
    return (
        <section className="placeSection">
            <div className="title-place">
                <h1>Stays in Finland</h1>
                <p>{dataVar.length - 2}+ stays</p>
            </div>
            <section className="hosts">
                {hostComponent.map((data) =>
                    <Banner key={data.id} datta={data}/>
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
            <BannerImg  photo={props.datta.photo}/>
            <div className="hostDetail">
                <span className="super" style={{display: styleSuperGuest(props.datta.superHost)}}>Super Host</span>
                <p className="type">{props.datta.type}</p>
                <div className="rating">
                    <img src={starIcon} alt="star rating"/>
                    <p>{props.datta.rating}</p>
                </div>               
            </div> 
            <h3>{props.datta.title}</h3>
        </div>
    )
}
function styleSuperGuest(value){
    if(value===true){
        return 'block';
    }else{
        return 'none'
    }
}
function searchExemple(value, datta){
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