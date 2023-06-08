import React from "react";
import "../header/header.css";

const Header = () => {
return (
<nav className="navbar">
    <div className="navbar__brand">
        <img className="navbar__brand-img" src="../../asset/image/logo.png" alt="Logo" />
    </div>
    <div className="navbar__menu">
        <ul className="navbar__menu-list">
            <li className="navbar__menu-item">
                <a className="navbar__item-btn" href="/">Home</a>
            </li>
            <li className="navbar__menu-item">
                <a className="navbar__item-btn" href="/about">About</a>
            </li>
            <li className="navbar__menu-item navbar__menu-item--promotions">
                <a className="navbar__item-btn" href="/promotions">Promotions</a>
                <span className="navbar__menu-item-badge">HOT</span>
            </li>
            <li className="navbar__menu-item">
                <a className="navbar__item-btn" href="/blogs">Blogs</a>
            </li>
            <li className="navbar__menu-item">
                <a className="navbar__item-btn" href="/contact">Contact Us</a>
            </li>
        </ul>

    </div>
    <div className="navbar__auth">
        <button className="navbar__auth-button navbar__auth-button--signin ">Masuk</button>
        <button className="navbar__auth-button navbar__auth-button--signup">Daftar Sekarang</button>
    </div>
</nav>
);
}
export default Header;