import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css'
import preview from "../../assets/preview.jpg"; // Adjust the path as needed

const NavBar = () => {
    const [menu, setMenu] = useState("Home")
    return (
        <div className="Navbar">
            <div className="logo">
                <img src={preview} alt="Eco life" />
            </div>
            <ul className="nav-links">
                <li><Link to="/" onClick={() => setMenu("Home")} className={menu == "Home" ? "active" : ""} >Home</Link></li>
                <li><Link to="/about" onClick={() => setMenu("About")} className={menu == "About" ? "active" : ""}>About</Link></li>
                <li><Link to="/product" onClick={() => setMenu("Product & Services")} className={menu == "Product & Services" ? "active" : ""}>Product & Services</Link></li>
                <li><Link to="/Get" onClick={() => setMenu("Get involved")} className={menu == "Get involved" ? "active" : ""}>Get involved</Link></li>
                <li><Link to="/contact" onClick={() => setMenu("contact")} className={menu == "Contact us" ? "active" : ""}>contact</Link></li>
                <li><Link to="/signup" onClick={() => setMenu("Signup")} className={menu == "Signup" ? "active" : ""}>Signup</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;