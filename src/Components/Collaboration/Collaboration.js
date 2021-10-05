import React from "react";
import image from "../../images/002.jpg";
import "./Collaboration.css";

const Collaboration = () => {
   return (
      <div className="collaboration-style bg-black p-5 my-5">
         <div>
            <h3 className="text-white">About Collaboration</h3>
            <p className="text-white">
               To develop a framework, podcasting operational change management
               inside processes. To maximize the long tail, take flawless key
               performance indicators offline. Keeping your eye on the ball
               while diving deep into the start-up mentality to generate
               convergence on cross-platform integration. Objectively empower
               made items while parallel platforms. For dependable supply
               chains, holistic testing techniques predominate. Engage top-tier
               online services in a dramatic way in comparison to cutting-edge
               outputs.
            </p>
         </div>
         <div>
            <img className="img-fluid" src={image} alt="" srcset="" />
         </div>
      </div>
   );
};

export default Collaboration;
