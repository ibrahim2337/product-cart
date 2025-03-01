import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  useCartProducts,
} from "@/redux/features/cart/cartSlice";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

export default function CartPage() {
  const dispatch = useDispatch();
  const products = useCartProducts();

  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {products.length === 0 ? (
        <div className="mt-10 text-center text-3xl">Your cart is empty</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product List */}
          <div className="lg:col-span-2 space-y-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row gap-4 bg-background border rounded-md p-4"
              >
                <div className="flex-shrink-0 w-24 h-24 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover rounded-md"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-sm sm:text-base line-clamp-2">
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">BDT {product.price}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-r-none cursor-pointer"
                          onClick={() =>
                            dispatch(decrementQuantity({ id: product.id }))
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <div className="w-8 text-center">
                          {product.quantity}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-l-none cursor-pointer"
                          onClick={() =>
                            dispatch(incrementQuantity({ id: product.id }))
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="font-semibold">
                        BDT {product.price * product.quantity}
                      </div>

                      <Button
                        variant="destructive"
                        size="icon"
                        className="h-8 w-8 cursor-pointer hover:bg-destructive/70"
                        onClick={() =>
                          dispatch(removeFromCart({ id: product.id }))
                        }
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-muted/30 rounded-md p-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">BDT {subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>BDT {subtotal}</span>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
