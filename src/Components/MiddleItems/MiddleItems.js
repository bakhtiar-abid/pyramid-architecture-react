import React, { useContext, useEffect, useState } from "react";
import { ServiceContext } from "../../App";
import Items from "../Items/Items";

import "./MiddleItems.css";

const MiddleItems = () => {
   const [services, setServices] = useContext(ServiceContext);

   return (
      <div className="bg-image">
         <div className="cards-wrapper">
            {services?.slice(0, 4)?.map((item) => (
               <Items item={item}></Items>
            ))}
         </div>
      </div>
   );
};

export default MiddleItems;
