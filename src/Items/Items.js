import React from "react";
import "./Items.css";

const Items = (props) => {
   const { img, name, price, language, descp, category } = props.item;
   return (
      <div>
         <section class="cards-wrapper display-style">
            <div class="">
               <a
                  class="card"
                  href=""
                  style={{
                     backgroundImage: `url(${img})`,
                  }}
               >
                  {
                     <div>
                        <h4 className="text-dark my-3"> {name} </h4>
                        <p className="text-dark">{descp.slice(0, 100)}...</p>
                        <div class="date">05 Oct 2021</div>
                        <div>
                           {" "}
                           <p>
                              <span className="fw-bolder text-dark">
                                 Price: {price}{" "}
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
                        <div class="tags"> {category} </div>
                     </div>
                  }
               </a>
            </div>
         </section>
      </div>
   );
};

export default Items;
