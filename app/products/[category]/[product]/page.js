import ProductClientComponent from "@/app/components/ProductClientComponent";
import { products } from "@/app/data";
import { urlParser } from "@/app/utils/functions";
import _ from "lodash";

export async function generateStaticParams() {
  // Generate paths from the products array
  if (!products || !Array.isArray(products)) {
    console.error("Error: Products array is missing or undefined.");
    return [];
  }

  const paths = products.map((product) => ({
    category: urlParser(product?.category || ""), // Add a default if undefined
    product: product.id,
  }));

  return paths;
}

const ProductDetails = ({ params: { product, category } }) => {
  return (
    <>{<ProductClientComponent product={product} category={category} />}</>
  );
};

export default ProductDetails;
