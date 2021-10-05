import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
   return (
      <div className="contact-style mb-5">
         <div className="d-flex justify-content-center rounded-3 align-items-center bg-dark p-5  ">
            <div>
               <h3 className="text-white">Contact Info</h3>
               <p className="text-white">
                  {" "}
                  <i class="fas fa-phone"></i> +1 (234) 567-8910
               </p>
               <p className="text-white">
                  {" "}
                  <i class="fas fa-envelope"></i> contact@yourmail.com
               </p>
               <p className="text-white">
                  <i class="fas fa-map-marker-alt"></i> 203, Evanto Labs, Behid
                  Alis Street, Australia
               </p>
            </div>
            <div>
               <div className="p-5 d-flex">
                  <span>
                     {" "}
                     <p className="text-white">
                        {" "}
                        Name:
                        <input
                           className="me-4 p-2 ms-2 rounded-3"
                           type="text"
                           placeholder="Enter Your Name"
                        />
                     </p>{" "}
                  </span>
                  <span>
                     <p className="text-white ">
                        {" "}
                        Email:
                        <input
                           className="ms-1 p-2 ms-2 rounded-3"
                           type="email"
                           placeholder="Enter a valid email address"
                        />
                     </p>
                  </span>
               </div>
               <p className="text-white ms-5 text-center">
                  <p> Send Us Your Message:</p>
                  <textarea
                     id="txtid"
                     name="txtname"
                     rows="4"
                     cols="50"
                     maxlength="200"
                     placeholder="your message"
                     className="p-3 rounded-3 "
                  ></textarea>
                  <br />
                  <div className="text-center">
                     <button className="btn btn-info m-3 ps-5 pe-5  ">
                        Submit
                     </button>
                  </div>
               </p>
            </div>
         </div>
      </div>
   );
};

export default ContactUs;
