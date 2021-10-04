import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/NotFound/NotFound";
import { createContext, useEffect, useState } from "react";
import ReviewOrder from "./Components/ReviewOrder/ReviewOrder";

import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";

export const ServiceContext = createContext("services");

function App() {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch("./services.JSON")
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);
   return (
      <ServiceContext.Provider value={[services, setServices]}>
         <div>
            <Router>
               <Header></Header>
               <Switch>
                  <Route exact path="/home">
                     <Home></Home>
                  </Route>
                  <Route exact path="/services">
                     <Services></Services>
                  </Route>
                  <Route exact path="/about">
                     <About></About>
                  </Route>
                  <Route exact path="/review">
                     <ReviewOrder></ReviewOrder>
                  </Route>
                  <Route path="/placeorder">
                     <PlaceOrder></PlaceOrder>
                  </Route>
                  <Route exact path="/">
                     <Home></Home>
                  </Route>
                  <Route path="*">
                     <NotFound></NotFound>
                  </Route>
               </Switch>
               <Footer></Footer>
            </Router>
         </div>
      </ServiceContext.Provider>
   );
}

export default App;
