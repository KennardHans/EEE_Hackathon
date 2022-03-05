import React, { useEffect } from "react";
import './style.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomModal } from "../../Pages/Signed_In_Pages/ViewEvent/Modal";
export const Navbar = () => {
    const [signed,setSigned] = useState(false);
    const [navbarContent,setNavbarContent] = useState(["FAQs","About","Log In","Sign Up",". . ."]);
    const[strOne,setStrOne] = useState('/faqs');
    const[strTwo,setStrTwo] = useState('/aboutus');
    const[show,setShow] = useState(false);
    const navigate = useNavigate();
    const handleNavigateOne = () => {
        navigate(strOne)
    }

    const handleNavigateTwo = () => {
        navigate(strTwo)
    }
    const handleSignIN = () => {
        if(navbarContent[2]==="Log In"){
            setSigned(true);
            setShow(true)
        }
    }
    useEffect(() => {
        if(signed){
            setNavbarContent(["Join Event","Create","About","Profile",". . ."])
            setStrOne('/joinevent');
            setStrTwo('/createevent')
        }
    },[signed])
    
    return ( 
        <div className="Navbar">
            <div onClick={() => {navigate('/')}}className="Navbar__left">
                <div className="Navbar__left__img">
                    <img src="/NavbarAssets/LOGO.png"/>
                </div>
                <div className="Navbar__left__title">EVE<span>NTLY</span></div>
            </div>
            <div className="Navbar__right">
                <div 
                onClick={handleNavigateOne} 
                className="Navbar__right__content">{navbarContent[0]}</div>
                <div 
                onClick={handleNavigateTwo}
                className="Navbar__right__content">{navbarContent[1]}</div>
                <div onClick={() => {
                    handleSignIN()
                }}className="Navbar__right__content">{navbarContent[2]}</div>
                <div onClick={() => {
                    handleSignIN()
                }}className="Navbar__right__content">{navbarContent[3]}</div>
                <div className="Navbar__right__content">{navbarContent[4]}</div>
            </div>
            <CustomModal show={show} setShow={setShow}/>
        </div>
     );
}
 