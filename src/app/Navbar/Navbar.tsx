// components/Navbar.js
import { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react"; // Remove X and Trash from here
import { Button } from "@/components/ui/button";
import CartModal from "../CartModal/CartModal";
// Import the new modal component

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

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
      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </nav>
  );
}
