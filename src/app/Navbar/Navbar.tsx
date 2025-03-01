import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CartModal from "../CartModal/CartModal";
// Import the CartModal component

export default function Navbar() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);

  return (
    <div>
      <nav className="py-5 shadow-md bg-gray-800">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            Shop<span className="text-teal-500">Ease</span>
          </div>

          {/* Desktop Menu */}
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

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <button
              onClick={openCartModal}
              className="relative"
              aria-label="View Cart"
            >
              <ShoppingCart className="w-6 h-6 text-teal-500 font-bold" />
              {/* You can add cart item count here */}
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartModalOpen && <CartModal closeModal={closeCartModal} />}
    </div>
  );
}
