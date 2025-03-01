import { ShoppingCart } from "lucide-react";
import { useCartCount } from "@/redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function Navbar() {
  const cartItemsCount = useCartCount();

  return (
    <div className="sticky top-0 z-10">
      <nav className="py-5 shadow-md bg-gray-800">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link
            to={"/"}
            className="text-2xl font-bold text-white cursor-pointer"
          >
            Shop<span className="text-teal-500">Ease</span>
          </Link>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link
              to={"/cart"}
              className="relative cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingCart className="w-6 h-6 text-teal-500 font-bold" />
              {/* You can add cart item count here */}

              {cartItemsCount > 0 && (
                <div className="absolute -top-3 -right-3 bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </div>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
