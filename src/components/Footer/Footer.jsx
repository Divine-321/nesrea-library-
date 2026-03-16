import React from "react";
import "./Footer.css";
import { i4, icon, location, onlyLogo, phone } from "../../assets";

const Footer = () => {
  return (
    <div className="foot-wrap">
      <div className="four">
        <div className="libra">
           <span><img src={onlyLogo} alt="" /> NESREA LIBRARY</span>
          <p>
            The National Environmental Standards and Regulations Enforcement
            Agency (NESREA) is committed to a cleaner and healthier environment
            for all Nigerians.
          </p>
        </div>

        <div className="links">
          <p>Library Links</p>
          <ul>
            <li>
              <a href="#">Digital Repository</a>
            </li>
            <li>
              <a href="#">Search Regulations</a>
            </li>
            <li>
              <a href="#">Research Publications</a>
            </li>
            <li>
              <a href="#">Submission Portal</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <p>Legal & Privacy</p>
          <ul>
            <li>
              <a href="#">Terms of Access</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Copyright Information</a>
            </li>
            <li>
              <a href="#">Compliance Guide</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <p>Contact Support</p>
          <ul>
            <li>
              <a href="#">
                <img src={icon} alt="" /> library@nesrea.gov.ng
              </a>
            </li>
            <li>
              <a href="#">
                <img src={phone} alt="" /> +234 9 234 5678
              </a>
            </li>
            <li>
              <a href="#">
                <img src={location} alt="" /> NESREA Headquarters, Abuja, Nigeria.
              </a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="line">
        <p></p>
        <p>© 2024 NESREA E-Library. All Rights Reserved. Official Portal of the Federal Republic of Nigeria.</p>
        <span>POWERED BY <img src={i4} alt="" /></span>
      </div>
    </div>
  );
};

export default Footer;
