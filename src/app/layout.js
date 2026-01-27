import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Huerta’s Albuquerque Jerky',
  description:
    'Handmade jerky from the heart of Albuquerque — seasoned with tradition, powered by chile.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}