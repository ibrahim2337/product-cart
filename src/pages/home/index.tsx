import ProductCard from "@/components/shared/product-card";

const products = [
  {
    id: 1,
    name: "Premium Solid T-Shirt Combo",
    image:
      "https://cdn.bitcommerz.com/manfarebd/media/1718205900409-manfarebd-id-13.jpeg",
    price: 1050,
    originalPrice: 1650,
    rating: 4,
  },
  {
    id: 2,
    name: "Designer Edition Calligraphy T Shirt",
    image:
      "https://cdn.bitcommerz.com/manfarebd/media/1716911229716-manfarebd-id-13.jpeg",
    price: 499,
    originalPrice: 750,
    rating: 5,
  },
  {
    id: 3,
    name: "Premium Lycra PK Polo Shirt",
    image:
      "https://cdn.bitcommerz.com/manfare-bd/media/1708423970801-manfare_bd-id-13.jpeg",
    price: 770,
    originalPrice: 890,
    rating: 4,
  },
  {
    id: 4,
    name: "Single Jersey Premium Quality Polo Shirt",
    image:
      "https://cdn.bitcommerz.com/manfarebd/media/1725390951444-manfarebd-id-13.jpeg",
    price: 690,
    originalPrice: 1000,
    rating: 5,
  },
  {
    id: 5,
    name: "Manfare ELITE Quality Panjabi",
    image:
      "https://cdn.bitcommerz.com/manfarebd/media/174058262167945422309_mp_222_1.webp",
    price: 2990,
    originalPrice: 3750,
    rating: 4,
  },
  {
    id: 6,
    name: "ELITE Quality Embroidered Panjabi",
    image:
      "https://cdn.bitcommerz.com/manfarebd/media/174066725239957496655_mp_195_1.webp",
    price: 2990,
    originalPrice: 3750,
    rating: 4,
  },
  {
    id: 7,
    name: "Premium Solid Shirts",
    image:
      "https://cdn.bitcommerz.com/manfarebd/media/1720198881382-manfarebd-id-13.jpeg",
    price: 990,
    originalPrice: 1400,
    rating: 4,
  },
  {
    id: 8,
    name: "Premium Denim Shirts",
    image:
      "https://cdn.bitcommerz.com/manfarebd/media/173714758876250763897_ms_13_1.webp",
    price: 990,
    originalPrice: 1400,
    rating: 4,
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto py-10">
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
