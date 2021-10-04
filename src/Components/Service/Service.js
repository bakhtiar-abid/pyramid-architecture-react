import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import "./Service.css";

const Service = (props) => {
   const { name, price, star, language, duration, img, descp, category } =
      props?.item;
   return (
      <div className="product">
         <div>
            <img src={img} alt="" />
         </div>
         <div className="ms-4 mb-3">
            <h4 className="product-name">{name}</h4>
            <p>
               <small>Category: {category}</small>
            </p>
            <p>Price: ${price}</p>
            <p>
               <small> Duration: {duration}</small>
            </p>
            <Rating
               initialRating={star}
               emptySymbol="far fa-star icon-color"
               fullSymbol="fas fa-star icon-color"
               readonly
            ></Rating>
            <br />
            <button
               onClick={() => props.handleAddToCart(props.item)}
               className="btn-regular"
            >
               <FontAwesomeIcon icon={faShoppingCart} /> add to cart
            </button>
         </div>
      </div>
   );
};

export default Service;
