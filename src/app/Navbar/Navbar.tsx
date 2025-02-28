// components/Navbar.js
import { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react"; // Remove X and Trash from here
import { Button } from "@/components/ui/button";
import CartModal from "../CartModal/CartModal";
// Import the new modal component

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Designer T-Shirt",
      price: 20.0,
      quantity: 1,
      image:
        "https://cdn.bitcommerz.com/manfarebd/media/1726496302507-manfarebd-id-13.jpeg",
    },
  ]);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const addProductToCart = () => {
    const newProduct = {
      id: 2,
      name: "Classic Sneakers",
      price: 50.0,
      quantity: 1,
      image:
        "https://cdn.bitcommerz.com/manfarebd/media/1726496302507-manfarebd-id-13.jpeg",
    };
    setCartItems((prevItems) => [...prevItems, newProduct]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const removeProductFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <nav className="flex items-center justify-between lg:px-20 px-5 py-5 shadow-md bg-gray-800">
      <div className="text-2xl font-bold text-white">
        Shop<span className="text-teal-500">Ease</span>
      </div>

      <ul className="hidden md:flex space-x-6">
        <li>
          <a
            href="#"
            className="text-white text-lg font-semibold hover:text-teal-500"
          >
            Products
          </a>
        </li>
      </ul>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Search className="w-6 h-6 text-teal-500 font-bold" />
        </Button>
        <Button variant="ghost" size="icon" onClick={toggleCart}>
          <ShoppingCart className="w-6 h-6 text-teal-500 font-bold" />
        </Button>
        <Button
          variant="ghost"
          className="flex items-center space-x-1 text-white font-bold bg-teal-500 hover:border-teal-500 hover:text-teal-500"
        >
          <User className="w-5 h-5" />
          <span className="hidden md:inline">Login</span>
        </Button>
      </div>

      {/* Render CartModal Component */}
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          onClose={toggleCart}
          onIncreaseQuantity={increaseQuantity}
          onDecreaseQuantity={decreaseQuantity}
          onRemoveProduct={removeProductFromCart}
          getTotalPrice={getTotalPrice}
          onAddProductToCart={addProductToCart}
        />
      )}
    </nav>
  );
}
