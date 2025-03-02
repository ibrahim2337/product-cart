import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart, useIsInCart } from "@/redux/features/cart/cartSlice";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  originalPrice: number;
  rating: number;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product: product }: ProductCardProps) {
  const dispatch = useDispatch();
  const isInCart = useIsInCart(product.id);
  return (
    <div className=" ">
      <div className="border rounded-lg p-2 sm:p-4 shadow-md bg-white">
        <div className="bg-gray-100 rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover"
          />
        </div>
        <h3 className="md:text-lg text-sm font-semibold mt-4 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center my-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`md:w-4 md:h-4 w-3 h-3 ${
                i < product.rating ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="md:text-lg text-md font-bold text-gray-900">
          BDT {product.price.toFixed(2)}
          <span className="text-gray-500 line-through text-sm ml-2">
            BDT {product.originalPrice}
          </span>
        </div>
        <Button
          onClick={() =>
            dispatch(
              addToCart({
                product: {
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  originalPrice: product.originalPrice,
                  rating: product.rating,
                  quantity: 1,
                },
              })
            )
          }
          disabled={isInCart}
          className="cursor-pointer w-full bg-teal-500 text-white hover:bg-white hover:border-2 hover:border-teal-500 hover:text-teal-500 font-semibold mt-4 disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:cursor-not-allowed disabled:pointer-events-auto"
        >
          {isInCart ? "Added To Cart" : "Add To Cart"}
        </Button>
      </div>
    </div>
  );
}
