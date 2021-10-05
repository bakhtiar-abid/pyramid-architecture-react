import React from "react";
import "./Footer.css";

const Footer = () => {
   return (
      <div>
         <footer
            className="container-fluid "
            style={{ backgroundColor: "#232f3e", padding: "100px" }}
         >
            <div className="container overflow-hidden">
               <div className="row gx-5 footer-info">
                  <div className="col-md-4 col">
                     <div className="p-3 footer-info">
                        <ul>
                           <h6 className="text-white">Get To Know Us</h6>
                           <li>
                              <a href="">Careers</a>
                           </li>
                           <li>
                              <a href="">Blog</a>
                           </li>
                           <li>
                              <a href="">About PyramidArchitecture</a>
                           </li>
                           <li>
                              <a href="">Investor Relations</a>
                           </li>
                           <li>
                              <a href="">PyramidArchitecture Business</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-4 col">
                     <div className="p-3 footer-info">
                        <ul>
                           <h6 className="text-white">Make Money with Us</h6>
                           <li>
                              <a href="">
                                 Sell products on PyramidArchitecture
                              </a>
                           </li>
                           <li>
                              <a href="">
                                 Sell on PyramidArchitecture Business
                              </a>
                           </li>
                           <li>
                              <a href="">Become an Affiliate</a>
                           </li>
                           <li>
                              <a href="">Advertise Your Products</a>
                           </li>
                           <li>
                              <a href="">Self-Publish with Us</a>
                           </li>
                           <li>
                              <a href="">Host an PyramidArchitecture Hub</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-3 col">
                     <div className="p-3 footer-info">
                        <ul>
                           <h6 className="text-white">
                              PyramidArchitecture Payment Products
                           </h6>
                           <li>
                              <a href="">PyramidArchitecture Business Card</a>
                           </li>
                           <li>
                              <a href="">Shop with Points</a>
                           </li>
                           <li>
                              <a href="">Reload Your Balance</a>
                           </li>
                           <li>
                              <a href="">
                                 PyramidArchitecture Currency Converter
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="text-center text-white">
               <small>Ⓒ 2023 PyramidArchitecture</small>
            </div>
         </footer>
      </div>
   );
};

export default Footer;
