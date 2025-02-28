// components/CartModal.js
import { Button } from "@/components/ui/button";
import { X, Trash } from "lucide-react";

const CartModal = ({
  cartItems,
  onClose,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveProduct,
  getTotalPrice,
  onAddProductToCart,
}) => {
  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex justify-end"
      onClick={onClose}
    >
      <div
        className="bg-white w-[450px] p-6 h-full overflow-y-auto shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={onClose}
        >
          <X className="w-6 h-6 text-gray-500" />
        </Button>

        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-gray-500">
                    Price: ${item.price}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  onClick={() => onDecreaseQuantity(item.id)}
                  disabled={item.quantity <= 1}
                  className="px-2 py-1 text-teal-500 border border-teal-500"
                >
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button
                  variant="outline"
                  onClick={() => onIncreaseQuantity(item.id)}
                  className="px-2 py-1 text-teal-500 border border-teal-500"
                >
                  +
                </Button>
              </div>

              <div className="text-lg font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <Button
                variant="ghost"
                onClick={() => onRemoveProduct(item.id)}
                className="text-red-500"
              >
                <Trash className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-4 text-lg font-semibold">
          Total: ${getTotalPrice().toFixed(2)}
        </div>

        <div className="mt-6">
          <Button className="w-full bg-teal-500 text-white">
            Proceed to Checkout
          </Button>
        </div>

        <div className="mt-6">
          <Button
            className="w-full bg-gray-500 text-white"
            onClick={onAddProductToCart}
          >
            Add Classic Sneakers to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
