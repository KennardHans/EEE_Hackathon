import React, { useEffect } from "react";
import './style.css'
import { useState } from "react";

export const Navbar = () => {
    const [signed,setSigned] = useState(false);
    const [navbarContent,setNavbarContent] = useState(["FAQs","About","Log In","Sign Up",". . ."]);
    const handleSignIN = () => {
        if(navbarContent[2]==="Log In"){
            setSigned(true);
        }
    }
    useEffect(() => {
        if(signed){
            setNavbarContent(["Join Event","Create","About","Profile",". . ."])
        }
    },[signed])
    
    return ( 
        <div className="Navbar">
            <div className="Navbar__left">
                <div className="Navbar__left__img">
                    <img src="/NavbarAssets/LOGO.png"/>
                </div>
                <div className="Navbar__left__title">EVE<span>NTLY</span></div>
            </div>
            <div className="Navbar__right">
                <div className="Navbar__right__content">{navbarContent[0]}</div>
                <div className="Navbar__right__content">{navbarContent[1]}</div>
                <div onClick={() => {
                    handleSignIN()
                }}className="Navbar__right__content">{navbarContent[2]}</div>
                <div onClick={() => {
                    handleSignIN()
                }}className="Navbar__right__content">{navbarContent[3]}</div>
                <div className="Navbar__right__content">{navbarContent[4]}</div>
            </div>
        </div>
     );
}
 