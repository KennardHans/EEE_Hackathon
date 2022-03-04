import React from "react";
import './style.css'


import { FaceBookLogo } from "./Assets/ic-social-facebook";
import { YoutubeLogo } from "./Assets/ic-social-youtube";
import { InstagramLogo } from "./Assets/ic social instagram";
export const Footer = () => {
    return ( 
        <div className="Footer">
            <div className="Footer__one">
                <div className="Footer__header">YOUR ACCOUNT</div>
                <div className="Footer__content">LOG IN</div>
                <div className="Footer__content">SIGN UP</div>
                <div className="Footer__content">HELP</div>
            </div>
            <div className="Footer__vl"></div>
            <div className="Footer__two">
                <div className="Footer__two__plan">
                    <div className="Footer__header">PLAN</div>
                    <div className="Footer__content">CREATE EVENTS</div>
                    <div className="Footer__content">CREATE GROUP</div>
                </div>
                <div className="Footer__two__join">
                    <div className="Footer__header">JOIN</div>
                    <div className="Footer__content">TRENDING</div>
                    <div className="Footer__content">NEAR YOU</div>
                    <div className="Footer__content">GUIDES</div>
                </div>
            </div>
            <div className="Footer__vl"></div>
            <div className="Footer__three">
                <div className="Footer__header">FOLLOW US</div>
                <div className="Footer__three__img">
                    <div><FaceBookLogo/></div>
                    <div><YoutubeLogo/></div>
                    <div><InstagramLogo/></div>
                </div>
                
            </div>
        </div>
     );
}
 