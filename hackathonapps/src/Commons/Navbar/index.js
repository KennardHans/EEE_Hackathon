import React from "react";
import './style.css'

export const Navbar = () => {
    return ( 
        <div className="Navbar">
            <div className="Navbar__left">
                <div className="Navbar__left__img">Image</div>
                <div className="Navbar__left__title">TITLE</div>
            </div>
            <div className="Navbar__right">
                <div className="Navbar__right__content">FAQs</div>
                <div className="Navbar__right__content">About</div>
                <div className="Navbar__right__content">Log In</div>
                <div className="Navbar__right__content">Sign Up</div>
                <div className="Navbar__right__content">. . .</div>
            </div>
        </div>
     );
}
 