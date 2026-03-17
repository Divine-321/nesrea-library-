import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import { Routes, Route } from "react-router-dom"
import { search } from "../../assets";
import {user1} from "../../assets";
import {user2} from "../../assets";
import {user3} from "../../assets";
import {user4} from "../../assets";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="wrapper">
        
        <Routes>
        <Route path="/" />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
        <div className="central">
          <h1>
            One-stop Central Hub for Environmental Regulations & Knowledge
          </h1>
          <p>
            Explore regulations, compliance guidelines, training resources, and
            environmental research curated by NESREA Library to support informed
            decision-making.
          </p>
        </div>

        <div className="search-bar">
          <img src={search} alt="search icon" className="search-icon" />

          <input type="text" placeholder="Search regulations, standards, air quality, waste management..." />
          <button className="search-btn">Search</button>
        </div>

        <div className="community">
          <p>Our Community</p>
          <div className="users">
            <img src={user1} alt="" />
            <img src={user2} alt="" />
            <img src={user3} alt="" />
            <img src={user4} alt="" />
          </div>
          <div className="bookl">
            <p>4k</p>
            <p>Book Lovers</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
