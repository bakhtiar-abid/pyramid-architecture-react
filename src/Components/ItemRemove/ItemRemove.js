import React from "react";

const ItemRemove = (props) => {
   const { name, price, quantity, img, key } = props.product;
   const { hanldeRemove } = props;
   return (
      <div className="product">
         <div>
            <img src={img} alt="" />
         </div>
         <div>
            <h4 className="product-name"> {name} </h4>
            <p> Price: {price} </p>
            <p> Quantity: {quantity} </p>
            <button onClick={() => hanldeRemove(key)} className="btn-regular">
               Remove
            </button>
         </div>
      </div>
   );
};

export default ItemRemove;
