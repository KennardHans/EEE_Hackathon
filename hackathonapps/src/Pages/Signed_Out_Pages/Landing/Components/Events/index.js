import React from "react";
import './style.css';

export const Event = () => {
    return (
        <div className="Event">
            <div className="Event__container">
                <div className="Event__toptext">
                    <div className="Event__toptext__top">IT'S JUST ONE CLICK AWAY</div>
                    <div className="Event__toptext__bot">SCHEDULE OR BOOK YOUR EVENT</div>
                </div>
                <div className="Event__pics">
                    <div className="Event__pics__left">
                        <img src="/LandingPageAssets/image5.png"/>
                        <div className="Event__pics__left__bot">
                            <div className="Event__pics__left__bot__flex">
                                <div className="Event__pics__left__bot__writing">WE WILL TRY WRITING SOMETHING HERE</div>
                                <div className="Event__pics__left__bot__interact">
                                    <button>
                                        <div>CREATE EVENT</div>
                                        <img src="/LandingPageAssets/right_arrow.png"/>
                                    </button>
                                    <img src="/LandingPageAssets/ic-actions-calendar.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Event__pics__right"> <img src="/LandingPageAssets/image6.png"/></div>
                </div>
            </div>
        </div>
    )
}