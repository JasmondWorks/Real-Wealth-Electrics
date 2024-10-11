import { categories } from "@/app/data";
import CategoryClientComponent from "@/app/components/CategoryClientComponent";
import _ from "lodash";
import { urlParser } from "@/app/utils/functions";

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: urlParser(category.title), // Only return the category ID/slug for the URL
  }));
}

const Categories = ({ params: { category } }) => {
  return (
    <>
      <CategoryClientComponent category={category} />
    </>
  );
};

export default Categories;
