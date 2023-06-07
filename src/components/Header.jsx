import React from "react";

const Header = () => {
return (
<nav className="navbar">
    <div className="navbar__brand">
        <img src="../../asset/image/logo.png" alt="Logo" />
    </div>
    <div className="navbar__menu">
        <ul className="navbar__menu-list">
            <li className="navbar__menu-item">Home</li>
            <li className="navbar__menu-item">About</li>
            <li className="navbar__menu-item navbar__menu-item--promotions">Promotions
                <span className="navbar__menu-item-badge">HOT</span>
            </li>
            <li className="navbar__menu-item">Blogs</li>
            <li className="navbar__menu-item">Contact Us</li>
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