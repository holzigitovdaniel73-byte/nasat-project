import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

import qrImage from "../../assets/svg/qrcode.svg";
import googlePlay from "../../assets/svg/googleplay.svg";
import appStore from "../../assets/svg/appstore.svg";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Exclusive */}
        <div className="footer-section">
          <h2 className="footer-title">Exclusive</h2>
          <h3 className="footer-subtitle">Subscribe</h3>
          <p>Get 10% off your first order</p>
          <div className="footer-input">
            <input type="email" placeholder="Enter your email" />
            <button>
              <IoSend size={18} />
            </button>
          </div>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h2 className="footer-title">Support</h2>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div className="footer-section">
          <h2 className="footer-title">Account</h2>
          <ul>
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/login">Login / Register</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="footer-section">
          <h2 className="footer-title">Quick Link</h2>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms Of Use</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Download App */}
        <div className="footer-section">
          <h2 className="footer-title">Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div className="app-download">
            <img src={qrImage} alt="QR Code" className="qr" />
            <div className="store-links">
              <img src={googlePlay} alt="Google Play" />
              <img src={appStore} alt="App Store" />
            </div>
          </div>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;