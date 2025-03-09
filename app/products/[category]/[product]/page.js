import ProductClientComponent from "../../../components/ProductClientComponent";
import { products } from "../../../data";
import { urlParser } from "../../../utils/functions";
import _ from "lodash";

export function generateStaticParams() {
  const paths = products.map((product) => ({
    category: urlParser(product?.category || ""),
    product: product.id.toString(), // Ensure `product` is a string
  }));

  return paths;
}

const ProductDetails = ({ params: { product, category } }) => {
  return (
    <>{<ProductClientComponent product={product} category={category} />}</>
  );
};

export default ProductDetails;
