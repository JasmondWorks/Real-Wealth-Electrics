"use client";

import React, { useState } from "react";
import Tabs from "./Tabs";
import ButtonLink from "./ButtonLink";
import { useAppData } from "../contexts/appContext";
import { urlParser } from "../utils/functions";

const BackgroundSlider = () => {
  const { useCases } = useAppData();
  const [selectedUseCase, setSelectedUseCase] = useState(0);

  function handleSelectUseCase(useCase) {
    const selectedUseCase = useCases.find((c) => c.title === useCase);
    setSelectedUseCase(useCases.indexOf(selectedUseCase));
  }

  return (
    <div
      style={{
        backgroundImage: `url(
          /assets/images/${useCases[selectedUseCase].image}
        )`,
        backgroundPosition: "center center",
      }}
      className={`aspect-square lg:aspect-video max-h-[600px] w-full bg-cover bg-[url('/assets/images/${useCases[selectedUseCase].image}')] bg-blend-overlay bg-black bg-opacity-65 flex flex-col`}
    >
      <Tabs
        buttonsTextArray={useCases.map((usecase) => usecase.title)}
        textColor="light"
        // secondaryText="All Use Cases"
        isVerticalPaddingBig={true}
        onSelectTab={handleSelectUseCase}
        isContained={true}
      />
      <div className="container-custom flex items-center flex-1">
        <div className="bg-black max-w-2xl bg-opacity-50 mx-auto w-fit px-10 py-8 text-white">
          <h3 className="text-xl text-yellow-400 font-bold mb-5">
            {useCases[selectedUseCase].title}
          </h3>
          <p>{useCases[selectedUseCase].shortSummary}</p>
          <ButtonLink
            className="text-yellow-400 mt-12"
            text="View more"
            isLink
            linkDestination={`/usecases/${urlParser(
              useCases[selectedUseCase].title
            )}`}
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
