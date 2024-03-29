import React from "react";
import { useHistory } from "react-router";
import { clearTheCart } from "../../Utilities/fakedb";
import Cart from "../Cart/Cart";
import useCart from "../CustomHooks/useCart";
import useProducts from "../CustomHooks/useProducts";
import ItemRemove from "../ItemRemove/ItemRemove";
import removeFromDb from "../RemoveItem/RemoveItem";
import "./ReviewOrder.css";

const ReviewOrder = () => {
   const [products, setProducts] = useProducts();
   const history = useHistory();
   // custom hooks
   const [cart, setCart] = useCart(products);

   const handleRemove = (key) => {
      const newCart = cart.filter((product) => product.key !== key);
      setCart(newCart);
      removeFromDb(key);
   };

   const handlePlaceOrder = () => {
      history.push("/placeorder");
      setCart([]);
      clearTheCart();
   };

   return (
      <div className="shop-container">
         <div className="product-container ms-5 ">
            {cart.map((product) => (
               <ItemRemove
                  product={product}
                  key={product.key}
                  hanldeRemove={handleRemove}
               ></ItemRemove>
            ))}
         </div>
         <div className="cart-container my-5">
            <div></div>
            <Cart cart={cart}>
               <button onClick={handlePlaceOrder} className="btn btn-warning">
                  Place Order
               </button>
            </Cart>
         </div>
      </div>
   );
};

export default ReviewOrder;
