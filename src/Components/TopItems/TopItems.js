import React from "react";
import Navbar from "../NavBar/Navbar";
import "./TopItems.css";

const TopItems = () => {
   return (
      <div>
         <div className="hero-image">
            <div className="hero-text">
               <h1 style={{ fontSize: "50px" }}>
                  Welcome To Pyramid Architecture Online Courses
               </h1>
               <p>
                  Explore these architectural lessons to see what tickles your
                  interest.
               </p>
               <button>Get Started</button>
            </div>
         </div>
      </div>
   );
};

export default TopItems;

/* {
   /* <div className="hero-image">
            <div className="hero-text">
               <h1 style={{ fontSize: "50px" }}>I am John Doe</h1>
               <p>And I'm a Photographer</p>
               <button>Hire me</button>
            </div>
         </div> */
