import React from "react";
import './style.css';
import { HeaderText } from "./HeaderText";
import { Members } from "./Members";
export const AboutUs = () => {
    return (
        <div className="AboutUs">
            <HeaderText/>
            <Members/>
            <div>BROUGHT TO YOU BY FIG-MA LYFE ❤️</div>
        </div>
    )
}