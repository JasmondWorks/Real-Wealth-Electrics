import UseCaseClientComponent from "../../components/UseCaseClientComponent";
import { useCases } from "../../data";
import { urlParser } from "../../utils/functions";

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
