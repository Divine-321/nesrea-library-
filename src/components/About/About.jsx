import React from "react";
import "./About.css";
import { doubleArrow, frame1, frame2, frame3, leaf } from "../../assets";

const About = () => {
  return (
    <div className="about-wrapper" id="about">
      <div className="inner-wrap">
        <div className="frame">
          <img src={frame1} alt="" />
          <img src={frame2} alt="" />
          <img src={frame3} alt="" />
        </div>

        <div className="about">
          <div className="lib">
            <img src={leaf} alt="" />
            <h2>ABOUT NESREA LIBRARY</h2>
            <p className="big">
              We will help you discover environmental knowledge that drives
              sustainable action.
            </p>
            <p className="small">
              NESREA LIBRARY brings together environmental publications,
              research, reports, and policy documents into one organized digital
              library for easy access and learning.
            </p>
          </div>
          <div className="group">
            <div>
              <p className="one">
                <img src={doubleArrow} alt="" />
                <span>Knowledge</span>
                </p>
              <p className="one">
                <img src={doubleArrow} alt="" />
                <span>Sustainability</span>
                </p>
              <p className="one">
                <img src={doubleArrow} alt="" />
                <span>Resources</span>
                </p>
            </div>
            <div>
              <p className="one">
                <img src={doubleArrow} alt="" />
                <span>Conversation</span>
                </p>
              <p className="one">
                <img src={doubleArrow} alt="" />
                <span>Access</span>
                </p>
              <p className="one">
                <img src={doubleArrow} alt="" />
                <span>Environment</span>
                </p>
            </div>
            <div>
              <p className="one">
                <img src={doubleArrow} alt="" />
                <span>Information</span>
                </p>
              <p className="one">
                <img src={doubleArrow} alt="" />
                <span>Publication</span>
                </p>
              <p className="one">
                <img src={doubleArrow} alt="" />
                <span>Research</span>
                </p>
            </div>
          </div>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default About;
