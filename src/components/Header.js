import React from "react";
//Import image
import logo from '../img/logo.svg';

//import Component
import Search from "./Search";

export default function Header() {
    return (
        <header>
            <img src={logo} className='logo' alt='logo of windbnb'/>
            <Search/>
        </header>
    )
}