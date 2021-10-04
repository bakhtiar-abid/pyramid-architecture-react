const getDb = () => localStorage.getItem("shopping_cart");

const updateDb = (cart) => {
   localStorage.setItem("shopping_cart", JSON.stringify(cart));
};

const removeFromDb = (id) => {
   const exists = getDb();
   if (!exists) {
   } else {
      const shopping_cart = JSON.parse(exists);
      delete shopping_cart[id];
      updateDb(shopping_cart);
   }
};

export default removeFromDb;
