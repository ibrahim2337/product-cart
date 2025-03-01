import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const CartModal = ({ cartItems, onClose }) => {
  // মোট মূল্য গণনা
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {/* কার্ট আইটেমগুলি দেখানো */}
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ৳{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:bg-red-50"
                >
                  <Trash className="w-5 h-5" />
                </Button>
              </li>
            ))}
          </ul>
        )}

        {/* মোট মূল্য এবং বাটনগুলি */}
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Total:</p>
            <p className="font-bold">৳{totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <Button
              onClick={onClose}
              className="bg-gray-500 text-white hover:bg-gray-600"
            >
              Close
            </Button>
            <Button className="bg-teal-500 text-white hover:bg-teal-600">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
