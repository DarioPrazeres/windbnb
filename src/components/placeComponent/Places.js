import React from "react";
import file from "../stays.json";
import starIcon from "../imgComponent/star.png"
var dataVar = file;
export default function Places() {
    return (
        <section className="placeSection">
            <div className="title-place">
                <h1>Stays in Finland</h1>
                <p>{dataVar.length - 2}+ stays</p>
            </div>
            <section className="hosts">
                {dataVar.map((data) =>
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
            <BannerImg  photo={props.datta.photo}  />
            <div className="hostDetail">
                <span className="super">Super Host</span>
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
