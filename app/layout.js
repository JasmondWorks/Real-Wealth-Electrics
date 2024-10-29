import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ProductsProvider } from "./contexts/productsContext";
import { AppDataProvider } from "./contexts/appContext";

const montserrat = Montserrat({
  subsets: ["latin"], // Set the character subset (e.g., 'latin', 'latin-ext')
  weight: ["400", "500", "700", "900"], // Choose font weights
  style: ["normal", "italic"], // Choose font styles
  display: "swap", // Use 'swap' to avoid invisible text
});

export const metadata = {
  title: "Real-Wealth Electrics",
  description: "A Nigeria owned and based electronics manufacturing company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <body className={`antialiased text-neutral-700`}>
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
