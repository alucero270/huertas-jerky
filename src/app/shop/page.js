import products from '../../lib/products';
import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Shop Jerky - Huerta’s Albuquerque Jerky',
  description:
    'Browse all handmade jerky flavors from Huerta’s Albuquerque Jerky.',
};

export default function ShopPage() {
  return (
    <div>
      <h2>Our Jerky Flavors</h2>
      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}