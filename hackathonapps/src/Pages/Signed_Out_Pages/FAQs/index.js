import React from "react";
import './style.css';
import { Header } from "./Components/Header";
import { Content } from "./Components/Content";
export const FAQs = () => {
    return (
        <div className="FAQs">
            <div><Header/></div>
            <div className="FAQs__content">
                <div className="FAQs__content--flex">
                    <div className="FAQs__content--flex__what">WHAT ARE WE?</div>
                    <div className="FAQs__content--flex__im">
                        <div>I'M A TOURIST, I'M AFRAID OF GETTING LOST</div>
                        <div>I'M NEW</div>
                    </div>
                    <div className="FAQs__content--flex__how">HOW DOES THE WHOLE PROCESS WORK</div>
                    <div className="FAQs__content--flex__measure">
                        <div>COVID 19 MEASUREMENTS</div>
                        <div>THERE ARE SO MANY EVENTS, HOW TO CHOOSE</div>
                    </div>
                </div>
            </div>
        </div>
    )
}