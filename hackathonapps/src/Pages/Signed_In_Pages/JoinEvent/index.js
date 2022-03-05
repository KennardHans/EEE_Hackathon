import React from "react";
import { Events } from "./Components/Events";
import { Header } from "./Components/Header";
import './style.css';

export const JoinEvent = () => {
    return (
        <div className="Join">
            <Header/>
            <div className="Join__big">JOIN EVENTS</div>
            <div className="Join__small">Find and dwelm into the most fun part of travelling by doing things that excites you the most! Mix and match using the filter provided and enjoy just within few clicks away!</div>
            <Events/>
        </div>
    )
}