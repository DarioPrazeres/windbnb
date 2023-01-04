import React from "react";
import file from "../stays.json";
var dataVar = file;
export default function Places() {
    return (
        <section className="placeSection">
            <div className="title-place">
                <h1>Stays in Finland</h1>
                <p>{dataVar.length - 2}+ stays</p>
            </div>
            <div className="hosts">
                {dataVar.map((data) =>
                    <BannerImg key={data.id} photo={data.photo} />
                )}
            </div>
        </section>
    )
}
function BannerImg(props) {
    return <img src={props.photo} alt="banner" className="bannerHost" />
}
function Banner() {
    return (
        <div>
            <BannerImg  />
            <div>
                <span>Super Host</span>
                <p>Type Apartement</p>
                <div className="rating">
                    <img src="" alt="star rating"/>
                    <p>rating</p>
                </div>
            </div>
        </div>
    )
}
//key={data.id} photo={data.photo}