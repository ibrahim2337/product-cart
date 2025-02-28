import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between lg:px-20 px-5 py-5 shadow-md bg-gray-800">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">
        Shop<span className="text-teal-500">Ease</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a
            href="#"
            className="text-white text-lg font-semibold  hover:text-teal-500"
          >
            Products
          </a>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Search className="w-5 h-5 text-teal-500 font-bold" />
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="w-6 h-6 text-teal-500 font-bold" />
        </Button>
        <Button
          variant="ghost"
          className="flex items-center space-x-1 text-white font-bold bg-teal-500 hover:border-teal-500 hover:text-teal-500"
        >
          <User className="w-5 h-5" />
          <span className="hidden md:inline ">Login</span>
        </Button>
      </div>
    </nav>
  );
}
