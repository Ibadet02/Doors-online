// import React from "react";
import '../styles/navbar.css'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBasketShopping, faUser, faSearch, faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export const Navbar = ({numberOfProducts}) =>{
    const [isMobileNavOpen,setIsMobileNavOpen]=useState(false)
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className={`mobile-nav ${isMobileNavOpen?"open":""}`}>
                    <div className="mobile-nav-top">
                        <span style={{fontWeight:"900"}}>DOORS</span>
                        <span onClick={()=>setIsMobileNavOpen(false)} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></span>
                    </div>
                    <div className="mobile-nav-menus">
                        <Link to={"/"}>HOME</Link>
                        <a href="#">CATEGORY</a>
                        <a href="#">NEWS</a>
                        <a href="#">CONTACT</a>
                    </div>
                </div>
                <div onClick={()=>setIsMobileNavOpen(true)} className="nav-hamburger">
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </div>
                <div className="nav-logo">
                    <a href="#"><h1>DOORS</h1></a>
                </div>
                <div className="nav-menu">
                    <div className="menu-names">
                        <Link to={"/"}>Home</Link>
                        <a href="#">About</a>
                        <a href="#">News</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="nav-icons">
                    <Link to={"/basket"}>
                        <div className="icon-border">
                            <span className='product-count'>{numberOfProducts}</span>
                            <FontAwesomeIcon color='black' icon={faBasketShopping}></FontAwesomeIcon>
                        </div>
                    </Link>
                    <div className="icon-border"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></div>
                    <div className="icon-border"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></div>
                </div>
            </div>
        </nav>
    )
}