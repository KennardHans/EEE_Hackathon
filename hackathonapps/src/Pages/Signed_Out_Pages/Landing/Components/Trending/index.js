import React from "react";
import './style.css';
import { Content } from "./content";
export const Trending = () => {
    return (
        <div className="Trending">
            <div className="Trending__toptext">
                <div>WHAT'S</div>
                <div>TRENDING?</div>
            </div>
            <div className="Trending__content">
                <Content/>
            </div>
        </div>
    )
}