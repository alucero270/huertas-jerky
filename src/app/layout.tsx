import type { Metadata } from "next";
import type { ReactNode } from "react";
import Providers from "../components/Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.huertasabqjerky.com"),
  title: {
    default: "Huerta's Albuquerque Jerky | Handmade New Mexico Beef Jerky",
    template: "%s | Huerta's Albuquerque Jerky",
  },
  description:
    "Handmade Albuquerque jerky with New Mexico flavor roots. Shop in store today and get ready for online checkout coming soon.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
