import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ProductsProvider } from "./contexts/productsContext";
import { AppDataProvider } from "./contexts/appContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Real-Wealth Electrics",
  description: "A Nigeria owned and based electronics manufacturing company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-neutral-700`}
      >
        <AppDataProvider>
          <ProductsProvider>
            <Navbar />
            {children}
            <Footer />
          </ProductsProvider>
        </AppDataProvider>
      </body>
    </html>
  );
}
