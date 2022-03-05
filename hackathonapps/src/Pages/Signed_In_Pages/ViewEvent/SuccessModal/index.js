import React from "react";
import './style.css';
import  Modal  from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
export const SuccessModal = (props) => {
    const {show,setShow} = props;
    return (
        <div className="SuccessModal">
            <Modal show={show} centered>
                <Modal.Body>
                    <div className="center">
                        <img src="/ViewEventAssets/JOIN EVENT_ADDED.png"/>
                        <div className="event_text">EVENT ADDED!</div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    )
}