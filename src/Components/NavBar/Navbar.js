import Button from "@restart/ui/esm/Button";
import React from "react";
import "./Navbar.css";
import logo from "../../images/Untitled design.png";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
               <a
                  style={{ color: "#dddddd" }}
                  className="navbar-brand"
                  href="/home"
               >
                  <h5>Pyramid Architecture</h5>
               </a>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div
                  className="collapse navbar-collapse link-style"
                  id="navbarSupportedContent"
               >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
                     <li className="nav-item me-2 ">
                        <Link
                           style={{ color: "#dddddd" }}
                           className="nav-link"
                           to="/home"
                        >
                           Home
                        </Link>
                     </li>
                     <li className="nav-item me-2 ">
                        <Link
                           style={{ color: "#dddddd" }}
                           className="nav-link"
                           to="/services"
                        >
                           Services
                        </Link>
                     </li>
                     <li className="nav-item me-2 ">
                        <Link
                           style={{ color: "#dddddd" }}
                           className="nav-link"
                           to="/about"
                        >
                           About Us
                        </Link>
                     </li>
                     <li className="nav-item me-2 ">
                        <Link
                           style={{ color: "#dddddd" }}
                           className="nav-link"
                           to="/review"
                        >
                           Review Order
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
