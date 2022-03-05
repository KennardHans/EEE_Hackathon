import React from "react";
import './style.css';
import {TopPic} from "./Components/TopPic";
import {Welcome} from "./Components/WelcomeBox";
import {Event} from "./Components/Events"
import { Trending } from "./Components/Trending";
export const LandingPage = () => {
    return (
        <div className="LandingPage">
            <TopPic/>
            <Welcome/>
            <Event/>
            <Trending/>
        </div>
    )
}