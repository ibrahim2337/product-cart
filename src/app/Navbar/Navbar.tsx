import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="  py-5 shadow-md bg-gray-800">
      <div className="container mx-auto flex items-center justify-between">
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
          <button className="relative">
            <ShoppingCart className="w-6 h-6 text-teal-500 font-bold" />
            {/* {cartItems.length > 0 && (
              <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {cartItems.length}
              </span>
            )} */}
          </button>
        </div>
      </div>
    </nav>
  );
}
