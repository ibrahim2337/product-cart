import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const product = [
  {
    id: 1,
    name: "Designer Edition Calligraphy T Shirt For Men",
    image:
      "https://cdn.bitcommerz.com/manfarebd/media/1726496302507-manfarebd-id-13.jpeg",
    price: 499,
    originalPrice: 899,
    rating: 3,
  },
  {
    id: 2,
    name: "Designer Edition Calligraphy T Shirt For Men",
    image:
      "https://cdn.bitcommerz.com/manfarebd/media/1726495946097-manfarebd-id-13.jpeg",
    price: 499,
    originalPrice: 750,
    rating: 4,
  },
  {
    id: 3,
    name: "Designer Edition T Shirt For Men",
    image:
      "https://cdn.bitcommerz.com/manfarebd/media/1718205900409-manfarebd-id-13.jpeg",
    price: 499,
    originalPrice: 900,
    rating: 5,
  },
  {
    id: 4,
    name: "Designer Edition Calligraphy T Shirt For Men",
    image:
      "https://cdn.bitcommerz.com/manfarebd/media/1716906045530-manfarebd-id-13.jpeg",
    price: 499,
    originalPrice: 799,
    rating: 4,
  },
];

const Products = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Our Current <span className="text-teal-500">Popular</span> Items
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((products) => (
          <div
            key={products.id}
            className="border rounded-lg p-4 shadow-md bg-white"
          >
            <div className="bg-gray-100 rounded-lg">
              <img
                src={products.image}
                alt={products.name}
                className="w-full object-cover"
              />
            </div>
            <h3 className="md:text-lg text-sm font-semibold mt-4 line-clamp-1">
              {products.name}
            </h3>
            <div className="flex items-center my-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`md:w-4 md:h-4 w-3 h-3 ${
                    i < products.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="md:text-lg text-md font-bold text-gray-900">
              ৳{products.price.toFixed(2)}
              <span className="text-gray-500 line-through text-sm ml-2">
                ৳{products.originalPrice}
              </span>
            </div>
            <Button className="w-full bg-teal-500 text-white hover:bg-white hover:border-2 hover:border-teal-500 hover:text-teal-500 mt-4">
              Add To Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
