import React from "react";
import "./library.css";
import { libraryimage } from "../../assets";

const Library = () => {

  const steps = [
    {
      title: "Category browsing",
      text: "Explore resources by environmental topics such as climate change, biodiversity, pollution, and sustainability."
    },
    {
      title: "Smart filtering",
      text: "Filter documents by year, department, category, author, or document type."
    },
    {
      title: "Featured Publications",
      text: "Highlight important or recommended environmental resources."
    },
    {
      title: "Digital document access",
      text: "Read or download environmental publications, policy documents, and research papers."
    }
  ];

  return (
    <div className="lib-wrapper" id="feature">
      <div className="wrap">
        <h1>NESREA LIBRARY FEATURES</h1>

        <div className="features">

          <div className="num">
            <p>
              NESREA LIBRARY is designed to make environmental information easy
              to find, explore, and access. With powerful search, organized
              categories, and a centralized collection of environmental
              publications.
            </p>

            <div className="steps">
              {steps.map((step, index) => (
                <div className="step" key={index}>
                  <div className="circle">{index + 1}</div>

                  <div className="content">
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#">View all features</a>

          </div>

          <img src={libraryimage} alt="Library" />

        </div>
      </div>
    </div>
  );
};

export default Library;