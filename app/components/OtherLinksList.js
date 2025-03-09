import React from "react";
import ButtonLink from "./ButtonLink";
import { urlParser } from "../utils/functions";

const OtherLinksList = ({ linksArr, basePath = "" }) => {
  return (
    <>
      {linksArr.map((el, i) => (
        <ButtonLink
          className="py-2 px-4 border border-neutral-300 hover:border-black"
          key={el.title}
          text={el.title}
          href={`/${basePath}/${urlParser(el.title)}`}
        />
      ))}
    </>
  );
};

export default OtherLinksList;
