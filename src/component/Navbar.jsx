import React, { useState } from 'react'
import Logo from "../assets/logobeauty.png";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';


function Navbar() {
    // const [openLinks, setOpenLinks] = useState(false);
    
    // const toggleNavbar = () => {
    //     setOpenLinks(!openLinks);
    // }
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src= {Logo} />
                {/* <div className="hiddenLinks">
                    <Link to="/"> Home</Link>
                    <Link to="/"> Menu</Link>
                    <Link to="/"> About</Link>
                </div> */}
            </div>
            <div className="rightSide">
                <Link to="/"> Home</Link>
                <Link to="/"> Menu</Link>
                <Link to="/"> About</Link>
            </div>
            {/* <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button> */}
        </div>
    )
}

export default Navbar
