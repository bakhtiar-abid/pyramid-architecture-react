import React from "react";
import "./TopItems.css";
import { useHistory } from "react-router-dom";

const TopItems = () => {
   const history = useHistory();
   const handleClick = () => {
      history.push("./services");
   };
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
               <button onClick={handleClick}>Get Started</button>
            </div>
         </div>
      </div>
   );
};

export default TopItems;
