import React from "react";
import "./Publication.css";
// import { publication1, stars } from "../../assets";
import {
  publication1,
  publication2,
  publication3,
  publication4,
  publication5,
  stars,
} from "../../assets";

const Publication = () => {

  const books = [
  {
    image: publication1,
    title: "The Environmental Republik",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus dignissim suspendisse sed sapien nec sodales.",
  },
  {
    image: publication2,
    title: "Silent Spring",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus dignissim suspendisse sed sapien nec sodales. Tincidunt platea semper suscipit nisi ullamcorper. tristique in consectetur. ",
  },
  {
    image: publication3,
    title: "Seeing Green",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus dignissim suspendisse sed sapien nec sodales.",
  },
  {
    image: publication4,
    title: "Advocating for Environment",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus dignissim suspendisse sed sapien nec sodales. Tincidunt platea semper suscipit nisi ullamcorper. Pellentesque dignissim egestas tristique in consectetur. ",
  },
  {
    image: publication5,
    title: "Planet Earth",
    description:
      "Lorem ipsum dolor sit amet consectetur. Lectus dignissim suspendisse sed sapien nec sodales. Tincidunt platea semper suscipit nisi ullamcorper. Pellentesque dignissim",
  },
];
  

  return (
    <div className="public-wrap">
      <div className="two">
        <h4>Featured Publication</h4>
        <div className="caret-div">
          <svg
            className="left-caret"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.261973 0.261883C0.178943 0.344625 0.113064 0.442943 0.0681129 0.5512C0.0231614 0.659457 2.09808e-05 0.775523 2.09808e-05 0.892742C2.09808e-05 1.00996 0.0231614 1.12603 0.0681129 1.23428C0.113064 1.34254 0.178943 1.44086 0.261973 1.5236L5.56787 6.8295L0.261973 12.1369C0.0946589 12.3042 0.000662804 12.5311 0.000662804 12.7677C0.000662804 13.0044 0.0946589 13.2313 0.261973 13.3986C0.429287 13.5659 0.656215 13.6599 0.892833 13.6599C1.12945 13.6599 1.35638 13.5659 1.52369 13.3986L7.46119 7.4611C7.54422 7.37836 7.6101 7.28004 7.65505 7.17178C7.70001 7.06353 7.72314 6.94746 7.72314 6.83024C7.72314 6.71302 7.70001 6.59696 7.65505 6.4887C7.6101 6.38044 7.54422 6.28212 7.46119 6.19938L1.52369 0.261883C1.44095 0.178853 1.34263 0.112973 1.23437 0.0680218C1.12612 0.0230694 1.01005 -7.05719e-05 0.892833 -7.05719e-05C0.775614 -7.05719e-05 0.659548 0.0230694 0.551291 0.0680218C0.443034 0.112973 0.344716 0.178853 0.261973 0.261883Z"
              fill="black"
            />
          </svg>

          <svg
            className="right-caret"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.261973 0.261883C0.178943 0.344625 0.113064 0.442943 0.0681129 0.5512C0.0231614 0.659457 2.09808e-05 0.775523 2.09808e-05 0.892742C2.09808e-05 1.00996 0.0231614 1.12603 0.0681129 1.23428C0.113064 1.34254 0.178943 1.44086 0.261973 1.5236L5.56787 6.8295L0.261973 12.1369C0.0946589 12.3042 0.000662804 12.5311 0.000662804 12.7677C0.000662804 13.0044 0.0946589 13.2313 0.261973 13.3986C0.429287 13.5659 0.656215 13.6599 0.892833 13.6599C1.12945 13.6599 1.35638 13.5659 1.52369 13.3986L7.46119 7.4611C7.54422 7.37836 7.6101 7.28004 7.65505 7.17178C7.70001 7.06353 7.72314 6.94746 7.72314 6.83024C7.72314 6.71302 7.70001 6.59696 7.65505 6.4887C7.6101 6.38044 7.54422 6.28212 7.46119 6.19938L1.52369 0.261883C1.44095 0.178853 1.34263 0.112973 1.23437 0.0680218C1.12612 0.0230694 1.01005 -7.05719e-05 0.892833 -7.05719e-05C0.775614 -7.05719e-05 0.659548 0.0230694 0.551291 0.0680218C0.443034 0.112973 0.344716 0.178853 0.261973 0.261883Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

     <div className="books">
  {books.map((book, index) => (
    <div className="book" key={index}>
      <img src={book.image} alt={book.title} />

      <div className="box">
        <h6>{book.title}</h6>
        <p>{book.description}</p>
        <img src={stars} alt="rating" />
      </div>
    </div>
  ))}
</div>
      
</div>
  )
}

export default Publication;
