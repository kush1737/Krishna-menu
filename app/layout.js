import "@fontsource-variable/montserrat";
import "./globals.css";

export const metadata = {
  title: "Menu | Krishna Garden Da Nang",
  description:
    "Pure Jain & vegetarian Indian restaurant in Da Nang. Bilingual menu in English and Vietnamese.",
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
