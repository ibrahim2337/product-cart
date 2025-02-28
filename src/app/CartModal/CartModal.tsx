import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Trash } from "lucide-react";

// Define the cart item type
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Props for the CartModal component
interface CartModalProps {
  onClose: () => void;
  initialCartItems?: CartItem[];
}

export default function CartModal({
  onClose,
  initialCartItems = [],
}: CartModalProps) {
  // State for cart items
  const [cartItems, setCartItems] = useState<CartItem[]>(
    initialCartItems.length > 0
      ? initialCartItems
      : [
          {
            id: "1",
            name: "Classic Sneakers",
            price: 89.99,
            quantity: 1,
            image:
              "https://cdn.bitcommerz.com/manfarebd/media/1726496302507-manfarebd-id-13.jpeg",
          },
        ]
  );

  // Function to increase item quantity
  const onIncreaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease item quantity
  const onDecreaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to remove product from cart
  const onRemoveProduct = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div
      className="fixed inset-0  bg-opacity-50 flex justify-end z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-[450px] p-6 h-full overflow-y-auto shadow-lg relative"
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

        {cartItems.length === 0 ? (
          <div className="py-8 text-center text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      Price: ${item.price.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-auto">
                  <Button
                    variant="outline"
                    onClick={() => onDecreaseQuantity(item.id)}
                    disabled={item.quantity <= 1}
                    className="px-2 py-1 h-8 text-primary border border-primary"
                    aria-label="Decrease quantity"
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    onClick={() => onIncreaseQuantity(item.id)}
                    className="px-2 py-1 h-8 text-primary border border-primary"
                    aria-label="Increase quantity"
                  >
                    +
                  </Button>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <div className="text-lg font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <Button
                    variant="ghost"
                    onClick={() => onRemoveProduct(item.id)}
                    className="text-red-500 p-1 h-8"
                    aria-label="Remove item"
                  >
                    <Trash className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <>
            <div className="mt-6 text-lg font-semibold flex justify-between">
              <span>Total:</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>

            <div className="mt-6">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}

        {/* <div className="mt-6">
          <Button
            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
            onClick={onAddProductToCart}
          >
            Add Classic Sneakers to Cart
          </Button>
        </div> */}
      </div>
    </div>
  );
}
