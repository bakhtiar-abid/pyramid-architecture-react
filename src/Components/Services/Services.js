import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ServiceContext } from "../../App";
import { addToDb, getStoredCart } from "../../Utilities/fakedb";
import Cart from "../Cart/Cart";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
   const [services, setServices] = useContext(ServiceContext);

   const [cart, setCart] = useState([]);
   // products to be rendered on the UI
   const [displayProducts, setDisplayProducts] = useState([]);

   useEffect(() => {
      fetch("./services.JSON")
         .then((res) => res.json())
         .then((data) => setDisplayProducts(data));
   }, []);

   useEffect(() => {
      if (services.length) {
         const savedCart = getStoredCart();
         const storedCart = [];
         for (const key in savedCart) {
            const addedProduct = services.find(
               (product) => product.key === key
            );
            if (addedProduct) {
               const quantity = savedCart[key];
               addedProduct.quantity = quantity;
               storedCart.push(addedProduct);
            }
         }
         setCart(storedCart);
      }
   }, [services]);

   const handleAddToCart = (product) => {
      const exists = cart.find((pd) => pd.key === product.key);
      let newCart = [];
      if (exists) {
         const rest = cart.filter((pd) => pd.key !== product.key);
         exists.quantity = exists.quantity + 1;
         newCart = [...rest, product];
      } else {
         product.quantity = 1;
         newCart = [...cart, product];
      }

      setCart(newCart);
      // save to local storage
      addToDb(product.key);
   };
   /* implementing search results */
   const handleSearch = (event) => {
      const searchText = event.target.value;

      const matchedProducts = services.filter((product) =>
         product.name.toLowerCase().includes(searchText.toLowerCase())
      );

      setDisplayProducts(matchedProducts);
   };
   return (
      <>
         <div className="search-container py-4 mb-4 ">
            <input
               type="text"
               onChange={handleSearch}
               placeholder="Search Item"
            />
         </div>
         <div className="shop-container">
            <div className="item-container">
               {displayProducts?.map((item) => (
                  <Service
                     key={item.key}
                     item={item}
                     handleAddToCart={handleAddToCart}
                  ></Service>
               ))}
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                  <Link to="/review">
                     <button className="btn-regular"> Review Order </button>
                  </Link>
               </Cart>
            </div>
         </div>
      </>
   );
};
// cart = { cart };
export default Services;
