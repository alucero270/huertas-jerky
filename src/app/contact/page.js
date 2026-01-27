export const metadata = {
  title: 'Contact - Huerta’s Albuquerque Jerky',
  description: 'Get in touch with Huerta’s Albuquerque Jerky.',
};

export default function ContactPage() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Want to place an order or have a question? We’d love to hear from you.
      </p>
      <ul>
        <li>
          <strong>Call:</strong>{' '}
          <a href="tel:5056775375">505‑677‑JERK</a>
        </li>
        <li>
          <strong>Visit:</strong> 123 Main St, Albuquerque, NM 87101
        </li>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@huertasjerky.com">info@huertasjerky.com</a>
        </li>
      </ul>
      <p>Follow us on social media:</p>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/HUERTAS_ALBUQUERQUE_JERKY_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram: @HUERTAS_ALBUQUERQUE_JERKY_
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/HuertasAlbuquerqueJerky"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook: Huerta’s Albuquerque Jerky
          </a>
        </li>
      </ul>
    </div>
  );
}