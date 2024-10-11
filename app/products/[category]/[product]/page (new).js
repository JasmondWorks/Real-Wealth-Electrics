import ProductClientComponent from "@/app/components/ProductClientComponent";
import { products } from "@/app/data";

export async function generateStaticParams() {
  // Generate paths from the products array
  const paths = products.map((product) => ({
    category: product.category.split(" ").join("_"),
    product: product.id,
  }));

  return paths;
}

const ProductDetails = ({ params }) => {
  console.log(params);
  return <>{/* <ProductClientComponent product={product} /> */}</>;
};

export default ProductDetails;
