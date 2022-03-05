import React from "react";
import './style.css';
import { SuccessModal } from "../SuccessModal";
import { useState } from "react";
export const WYCD = () => {
    const [sucShow,setSucShow] = useState(false);
    return (
        <div className="WYCD">
            <div className="text">WHAT YOU CAN DO</div>
            <div className="container">
            <div className="grid">
                <div className="Item">
                    <img src="/ViewEventAssets/image 4.png"/>
                    <div className="small_text">Fine Dining</div>
                </div>
                <div className="Item">
                    <img src="/ViewEventAssets/image 4.png"/>
                    <div className="small_text">Late Night Cycling</div>
                </div>
                <div className="Item">
                    <img src="/ViewEventAssets/image 4.png"/>
                    <div className="small_text">Heritage</div>
                </div>
            </div>
            </div>
            <div className="yellowbar">
                <div><img onClick={() => {setSucShow(true)}}className="add-pic" src="/ViewEventAssets/ADD.png"/></div>
                <div></div>
            </div>
            <SuccessModal show={sucShow} setShow={setSucShow}/>
        </div>
    )
}