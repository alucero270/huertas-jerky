import products from '../../../lib/products';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    notFound();
  }
  return (
    <div>
      <h2>{product.name} Jerky</h2>
      <p>{product.fullDescription}</p>
    </div>
  );
}