import React from "react";
import "./Informed.css";

const Informed = () => {
  return (
    <div className="inform">
      <div className="stay">
        <h2>Stay Informed</h2>
        <p>
          Subscribe to our newsletter to receive the latest updates on new
          environmental regulations, standards, and featured publications.
        </p>
      </div>

      <div className="sub">
        <input type="text" placeholder="Enter your email address" />
        <button className="subscribe-btn">Subscribe Now</button>
        <p>We care about your data. Read our <span><a href="">Privacy Policy</a></span>.</p>
      </div>
    </div>
  );
};

export default Informed;
