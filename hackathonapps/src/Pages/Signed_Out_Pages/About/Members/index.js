import React from "react";
import './style.css';
import { Syl } from "./Syl";
import { Kennard } from "./Kennard";
import { Ricky } from "./Ricky";
import { Victor } from "./Victor";
export const Members = () => {
    return (
        <div className="Members">
            <Syl/>
            <Kennard/>
            <Ricky/>
            <Victor/>
        </div>
    )
}