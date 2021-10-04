import React from "react";
import Rating from "react-rating";

const ItemRemove = (props) => {
   const { name, price, star, language, duration, img, descp, category, key } =
      props.product;
   const { hanldeRemove } = props;
   return (
      <div className="product my-5">
         <div>
            <img src={img} alt="" />
         </div>
         <div className="ms-4 mb-3">
            <h4 className="product-name">{name}</h4>
            <p>Price: ${price}</p>
            <p>Language: {language}</p>
            <p>
               <small>Category: {category}</small>
            </p>
            <p>
               <small> Description: {descp}</small>
            </p>
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
            <br />
            <button
               onClick={() => hanldeRemove(key)}
               className="btn btn-danger"
            >
               Remove
            </button>
         </div>
      </div>
   );
};

export default ItemRemove;
