export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p>
          © {year} Huerta’s Albuquerque Jerky. All rights reserved.
        </p>
      </div>
    </footer>
  );
}