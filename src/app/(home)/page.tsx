import products from '../../lib/products';
import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Home - Huerta’s Albuquerque Jerky',
  description:
    'Handmade jerky from the heart of Albuquerque — seasoned with tradition, powered by chile.',
};

export default function HomePage() {
  const featured = products.slice(0, 4);
  return (
    <div>
      <section className="hero">
        <h2>Handmade New Mexican Jerky</h2>
        <p>Bold flavors, family-made. Come taste what everyone’s talking about.</p>
        <a href="/shop" className="cta-button">
          Shop Now
        </a>
      </section>
      <section>
        <h3>Featured Flavors</h3>
        <div className="grid">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <p style={{ marginTop: '1rem' }}>
          <a href="/shop" className="cta-button">
            View All Flavors
          </a>
        </p>
      </section>
      <section>
        <h3>Visit Us</h3>
        <p>Stop by our shop or find us at local events. We’d love to meet you!</p>
      </section>
    </div>
  );
}