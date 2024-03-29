import React from "react";

const Cart = (props) => {
   const { cart } = props;

   let totalQuantity = 0;
   let total = 0;
   for (const product of cart) {
      if (!product.quantity) {
         product.quantity = 1;
      }
      total = total + product.price * product.quantity;
      totalQuantity = totalQuantity + product.quantity;
   }
   /* Calculating Total Cost */
   // const shipping = total > 0 ? 15 : 0;
   const tax = total * 0.1;
   const grandTotal = total + tax;
   return (
      <div>
         <h3>Order Summary</h3>
         <h5>Items Ordered: {totalQuantity}</h5>
         <br />
         <p>Total: ${total.toFixed(2)}</p>
         {/* <p>Shipping: {shipping}</p> */}
         <p>tax: ${tax.toFixed(2)}</p>
         <p>Grand Total: ${grandTotal.toFixed(2)}</p>
         <p>{props.children}</p>
      </div>
   );
};

export default Cart;
