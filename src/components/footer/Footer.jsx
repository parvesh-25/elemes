
import "../footer/footer.css";
import React, { useState, useEffect } from 'react';

const Footer = ()=>{
    const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);
return(
<footer>
    <div className="footer__container">
        <div className="footer__brief">
            <img src="../../../asset/image/logo.png" alt="" className="footer__brief-logo" />
            <p className="footer__brief-about">Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                Kecamatan Setiabudi, Kota Jakarta Selatan,
                Daerah Khusus Ibukota Jakarta 12950</p>
            <div className="footer__brief-medsos">

                <img className="footer__medsos-icon" src="../../../asset/icon/mail.svg" alt="" />
                <img className="footer__medsos-icon" src="../../../asset/icon/telp.svg" alt="" />
                <img className="footer__medsos-icon" src="../../../asset/icon/insta.svg" alt="" />

            </div>
        </div>
        <div className="footer__categories">
            <p className="footer__title">Categories</p>
            <ul className="footer__menu">
                <li><a href="" className="footer__menu-item">Cupcake</a></li>
                <li><a href="" className="footer__menu-item">Pizza</a></li>
                <li><a href="" className="footer__menu-item">Salmon</a></li>
                <li><a href="" className="footer__menu-item">Kebab</a></li>
                <li><a href="" className="footer__menu-item">Doughnut</a></li>
            </ul>
        </div>
        <div className="footer__about">
            <p className="footer__title">About Us</p>
            <ul className="footer__menu">
                <li><a href="" className="footer__menu-item">About Us</a></li>
                <li><a href="" className="footer__menu-item">FAQ</a></li>
                <li><a href="" className="footer__menu-item">Report Problem</a></li>
            </ul>
        </div>
        <div className="footer__newsletter">
            <p className="footer__title">Newsletter</p>
            <p className="footer__newsletter-text">Get now free 50% discount for alll products on your first order</p>
            <div class="footer__input-container">
                <input type="text" placeholder="Your email address" class="footer__input" />
                <button type="submit" class="footer__submit-button">Send</button>
            </div>

            <div className="footer__newsletter-contacts">
                <p className="footer__contact">
                    <img src="../../../asset/icon/mail.svg" alt="" />
                    elemisid@gmail.com</p>
                <p className="footer__contact">
                    <img src="../../../asset/icon/telp.svg" alt="" />
                    0888 1111 2222 </p>
            </div>
        </div>
    </div>
    <p className="footer__copyright">
    &copy; {currentYear} elemes id. all right reserved
    </p>
</footer>
)
}

export default Footer;