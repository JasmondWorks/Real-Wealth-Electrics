"use client";

import React, { useState } from "react";
import TabButton from "./TabButton";
import ArrowLink from "./ButtonLink";
import ButtonLink from "./ButtonLink";

const secondaryText = "All Categories";
const Tabs = ({ buttonsTextArray, secondaryText = "", className }) => {
  const [selectedTab, setSelectedTab] = useState("Digital Satellite Clocks");

  return (
    <div
      className={`border-b border-neutral-200  flex justify-between overflow-x-auto ${className}`}
    >
      <div className="flex flex-1">
        {buttonsTextArray.map((text) => (
          <TabButton
            onSelectTab={() => setSelectedTab(text)}
            selectedTab={selectedTab}
            text={text}
            key={text}
          />
        ))}
      </div>
      {secondaryText && (
        <div className="flex items-center">
          <ButtonLink size="base" className="text-base" text={secondaryText} />
        </div>
      )}
    </div>
  );
};

export default Tabs;
