import React from "react";
import './style.css';
import  Modal  from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
export const CustomModal = (props) => {
    const {show,setShow} = props;
    const navigate = useNavigate()
    return (
        <div>
            <Modal show={show} centered>
                <Modal.Header>
                    <div className="header">
                        <div className="pink">GET STARTED WITH</div>
                        <img src="/ViewEventAssets/Group 18181.png"/>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div onClick={() => {setShow(false)}}className="flex">
                        <img src="/ViewEventAssets/Email Text Input.png"/>
                        <img src="/ViewEventAssets/Email Text Input (1).png"/>
                        <img src="/ViewEventAssets/Email Text Input (2).png"/>
                        <img onClick={() => {navigate('/joinevent')}}src="/ViewEventAssets/Email Text Input (3).png"/>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}