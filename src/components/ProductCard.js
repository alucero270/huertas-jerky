import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name} Jerky</h3>
      <p>{product.shortDescription}</p>
      <Link href={`/products/${product.slug}`}>View Details</Link>
    </div>
  );
}