import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/NotFound/NotFound";
import { createContext } from "react";

export const ServiceContext = createContext("services");

function App() {
   return (
      <ServiceContext.Provider>
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
                  <Route exact path="/cart">
                     <Cart></Cart>
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
