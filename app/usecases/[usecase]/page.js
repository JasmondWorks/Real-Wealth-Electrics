import UseCaseClientComponent from "@/app/components/UseCaseClientComponent";
import { useCases } from "@/app/data";
import { urlParser } from "@/app/utils/functions";

export async function generateStaticParams() {
  return useCases.map((usecase) => ({
    usecase: urlParser(usecase.title), // Only return the category ID/slug for the URL
  }));
}

const UseCases = ({ params: { usecase } }) => {
  return (
    <>
      <UseCaseClientComponent usecase={usecase} />
    </>
  );
};

export default UseCases;
