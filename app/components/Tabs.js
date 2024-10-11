"use client";

import React, { useState } from "react";
import TabButton from "./TabButton";
import ArrowLink from "./ButtonLink";
import ButtonLink from "./ButtonLink";

const secondaryText = "All Categories";
const Tabs = ({
  onSelectTab,
  buttonsTextArray,
  secondaryText = "",
  className,
  textColor = "dark",
  isVerticalPaddingBig = false,
  isContained = false,
}) => {
  const [selectedTab, setSelectedTab] = useState(buttonsTextArray[0]);

  function handleSelectTab(tab) {
    onSelectTab(tab);
    setSelectedTab(tab);
  }
  return (
    <div
      className={`border-b ${
        textColor === "dark" ? "border-neutral-200" : "border-neutral-700"
      }   overflow-x-auto w-full ${className} 
      ${!secondaryText ? "flex" : ""}
       `}
    >
      <div
        className={`flex justify-between ${
          isContained ? "container-custom" : ""
        }`}
      >
        <div className="flex flex-1">
          {buttonsTextArray.map((text) => (
            <TabButton
              onSelectTab={() => handleSelectTab(text)}
              selectedTab={selectedTab}
              text={text}
              key={text}
              textColor={textColor}
              isVerticalPaddingBig={isVerticalPaddingBig}
            />
          ))}
        </div>
        {secondaryText && (
          <div className="flex items-center px-4">
            <ButtonLink
              size="base"
              className={`text-base ${
                textColor === "dark" ? "text-black" : "text-yellow-400"
              } `}
              text={secondaryText}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
