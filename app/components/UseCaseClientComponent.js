"use client";

import BlogDetails from "../components/BlogDetails";
import { useAppData } from "../contexts/appContext";
import SectionHeader from "./SectionHeader";
import SectionLayout from "./SectionLayout";
import { urlParser } from "../utils/functions";
import OtherLinksList from "./OtherLinksList";

const UseCaseClientComponent = ({ usecase }) => {
  const { useCases } = useAppData();

  console.log(usecase);

  const useCaseData = useCases.find((u) => urlParser(u.title) === usecase);
  const { title, image } = useCaseData;
  const otherUseCases = useCases.filter((u) => u.title !== useCaseData.title);
  console.log(otherUseCases);

  return (
    <>
      <BlogDetails
        pageRoute={usecase}
        data={useCases}
        heading={`Benefits of our products in the ${title} industry`}
        pageSubtitle="Use Case"
        pageImage={image}
      />
      <SectionLayout>
        <SectionHeader title="Other use cases" />
        <div className="flex flex-wrap gap-5 justify-center">
          <OtherLinksList basePath="usecases" linksArr={otherUseCases} />
        </div>
      </SectionLayout>
    </>
  );
};

export default UseCaseClientComponent;
