import { collections, dbConnect, type Product } from "@/lib/dbConnect";
import ProductCard from "../components/ProductCard";
interface ProductHighlightProps {
  limit?: number;
}
const ProductHighlight = async ({ limit }: ProductHighlightProps) => {
  const db = await dbConnect(collections.products);
  const query = db.find<Product>({});

  if (typeof limit === "number") {
    query.limit(limit);
  }

  const products = await query.toArray();
  return (
    <section className="max-w-10/12 mx-auto">
      <h1 className="text-3xl font-bold text-center py-4">
        {limit ? "Highlighted Products" : "All Products"}
      </h1>
      <p className="text-center text-gray-500 mb-6">
        {limit
          ? "Explore some of our top picks and featured products curated just for you."
          : "Browse through our full collection of products and find what you need."}
      </p>

      <div
        className={`grid gap-4 mx-auto ${
          limit
            ? "grid-cols-3 sm:grid-cols-5"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        }`}
      >
        {products.map((product) => (
          <div key={product._id?.toString()}>
            <ProductCard
              product={{ ...product, _id: product._id.toString() }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductHighlight;
