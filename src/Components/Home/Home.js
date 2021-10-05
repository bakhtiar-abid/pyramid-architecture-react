import React from "react";

import MiddleItems from "../MiddleItems/MiddleItems";
import MoreItems from "../MoreItems/MoreItems";

import TopItems from "../TopItems/TopItems";

const Home = () => {
   return (
      <div>
         <TopItems></TopItems>
         <MiddleItems></MiddleItems>
         <MoreItems></MoreItems>
      </div>
   );
};

export default Home;
