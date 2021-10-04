import React from "react";
import "./Items.css";

const Items = (props) => {
   const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];
   const d = new Date();
   var date = d.getDate();
   // var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
   var year = d.getFullYear();
   const currentDate = date + " " + monthNames[d.getMonth()] + " " + year;
   const { img, name, price, language, descp, category } = props.item;
   return (
      <div>
         <section className="cards-wrapper display-style">
            <div className="">
               <a
                  className="card"
                  href=""
                  style={{
                     backgroundImage: `url(${img})`,
                  }}
               >
                  {
                     <div>
                        <h4 className="text-dark my-3"> Title: {name} </h4>
                        <p className="text-dark">
                           Descp: {descp.slice(0, 100)}...
                        </p>
                        <div className="date text-dark "> {currentDate} </div>
                        <div>
                           {" "}
                           <p>
                              <span className="fw-bolder text-dark">
                                 Price: ${price}{" "}
                              </span>
                           </p>{" "}
                        </div>
                        <div>
                           {" "}
                           <p>
                              <span className="fw-bolder text-dark">
                                 Language: {language}{" "}
                              </span>
                           </p>{" "}
                        </div>

                        <small> Category: {category} </small>
                     </div>
                  }
               </a>
            </div>
         </section>
      </div>
   );
};

export default Items;
