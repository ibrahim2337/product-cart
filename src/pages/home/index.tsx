import ProductCard from "@/components/shared/product-card";

const products = [
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

export default function HomePage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Our Current <span className="text-teal-500">Popular</span> Items
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
