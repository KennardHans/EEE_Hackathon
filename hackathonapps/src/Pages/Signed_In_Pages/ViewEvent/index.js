import React from "react";
import { About } from "./About";
import './style.css';
import { SuccessModal } from "./SuccessModal";
import { TopPic } from "./TopPic";
import { WYCD } from "./WhatYouCanDo";

export const ViewEvent = () => {
    return (
        <div className="ViewEvent">
            <TopPic/>
            <About/>
            <img className="Attendees"src="/ViewEventAssets/Attendees.png"/>
            <WYCD/>
        </div>
    )
}