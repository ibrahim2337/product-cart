import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between lg:px-20 px-5 py-5 shadow-md bg-white">
      {/* Logo */}
      <div className="text-xl font-bold">ShopEase</div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#" className="text-gray-700 hover:text-black">
            Products
          </a>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Search className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="w-5 h-5" />
        </Button>
        <Button variant="ghost" className="flex items-center border space-x-1">
          <User className="w-5 h-5" />
          <span className="hidden md:inline">Login</span>
        </Button>
      </div>
    </nav>
  );
}
