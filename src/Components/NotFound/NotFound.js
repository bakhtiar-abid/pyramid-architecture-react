import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
   const history = useHistory();
   const handleClick = () => {
      history.push("./home");
   };
   return (
      <div className="my-5">
         <div className="jumbotron jumbotron-fluid">
            <div className="container">
               <h1 className="display-4">Uh oh!</h1>
               <p className="lead">404 Page not found, pelase try again!</p>

               <button
                  className="btn btn-lg btn-warning"
                  type="submit"
                  name="button"
                  onClick={() => handleClick()}
               >
                  {" "}
                  Go To Home{" "}
               </button>
            </div>
         </div>
      </div>
   );
};

export default NotFound;
