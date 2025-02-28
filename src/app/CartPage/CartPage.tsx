// pages/CartPage.js

import { useState } from "react";
import CartModal from "../CartModal/CartModal";


const CartPage = () => {
  const [cartItems, setCartItems] = useState([...]); // Initialize cart items here
  const [isCartOpen, setIsCartOpen] = useState(true);

  const increaseQuantity = (id) => { ... };
  const decreaseQuantity = (id) => { ... };
  const removeProductFromCart = (id) => { ... };
  const getTotalPrice = () => { ... };
  const addProductToCart = () => { ... };

  return (
    <div>
      <CartModal
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onIncreaseQuantity={increaseQuantity}
        onDecreaseQuantity={decreaseQuantity}
        onRemoveProduct={removeProductFromCart}
        getTotalPrice={getTotalPrice}
        onAddProductToCart={addProductToCart}
      />
    </div>
  );
};

export default CartPage;
