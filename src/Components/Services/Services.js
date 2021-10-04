import React, { useContext } from "react";
import { ServiceContext } from "../../App";

const Services = () => {
   const [services, setServices] = useContext(ServiceContext);
   console.log(services);
   return (
      <div className="py-5">
         <h1>This is service section</h1>
      </div>
   );
};

export default Services;
