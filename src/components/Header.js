import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="container">
        <div className="logo">
          <Link href="/">
            Huerta’s Albuquerque Jerky
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}