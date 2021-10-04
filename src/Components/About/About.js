import React from "react";
import "./About.css";
import aboutBg from "../../images/about-us.jpg";

const About = () => {
   return (
      <div className="bg-syle">
         <h1 className="about-us py-5">About Us</h1>
         <div style={{ display: "flex", margin: "50px" }}>
            {" "}
            <div>
               <p>
                  The Department of pyramid Architecture tomorrow’s
                  professionals and critical thinkers driven by the development
                  ethos of responsive, resilient, and inclusive built
                  environment. With this mission, the Department pursues
                  multidisciplinary knowledge and skills aimed at cultivating
                  comprehensive aesthetic, technological, socioeconomic, and
                  global understanding to meet environmental and developmental
                  challenges. Its pedagogy aspires to empower students to
                  realize their full potential for serving local and global
                  communities in need of improved conditions. Pyramid
                  Architecture develops tomorrow's professionals and critical
                  thinkers via the development ethos of responsive, resilient,
                  and inclusive built environments. environment. The Department
                  pursues this objective. Interdisciplinary knowledge and
                  abilities aimed at developing aesthetic, technical, social,
                  and political dimensions worldwide cooperation to address
                  environmental and developmental issues challenges. Its
                  approach aims to provide students with the knowledge and
                  skills they need to succeed. Achieve their greatest potential.
               </p>
            </div>
         </div>
      </div>
   );
};

export default About;
