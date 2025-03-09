import Image from "next/image";
import React from "react";
import PageHeader from "./PageHeader";
import SectionLayout from "./SectionLayout";
import SectionHeader from "./SectionHeader";
import styles from "./BlogDetails.module.css";
import _ from "lodash";
import { urlParser } from "../utils/functions";

const BlogDetails = ({
  pageRoute,
  data,
  pageSubtitle,
  heading,
  pageHeader,
  pageImage = "",
  smallPageImage = false,
}) => {
  const {
    title: pageTitle,
    shortSummary,
    details: { introduction, content, conclusion },
  } = data.find((d) => urlParser(d.title) === pageRoute);

  return (
    <div>
      {!pageHeader && (
        <PageHeader title={pageTitle} subtitle={pageSubtitle}>
          <p>{shortSummary}</p>
        </PageHeader>
      )}
      {pageHeader}
      <SectionLayout className="">
        <div className="container-custom--sm">
          <div className="space-y-8 lg:space-y-12 text-center">
            {/* <SectionHeader
              title={heading}
              // subtitle={introduction}
              isMarginBottomPresent={false}
            /> */}
            {/* <h2 className="font-bold text-3xl leading-snug">{heading}</h2> */}
            {pageImage && (
              <Image
                className={smallPageImage && "lg:max-w-xl mx-auto"}
                src={`/assets/images/${pageImage}`}
                alt="page image"
                width={2000}
                height={2000}
              />
            )}
            <p>{introduction}</p>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className="!bg-white">
        <SectionHeader title={`Benefits of ${pageTitle}`} />
        <div className="flex flex-col space-y-8 lg:space-y-12">
          {content.map((el) => (
            <div
              className={`${styles.alternatedSection} py-10 bg-neutral-50`}
              key={el.heading}
            >
              <div className="container-custom--sm">
                <h3 className="mb-6 font-bold text-xl">{el.heading}</h3>
                <div className="space-y-4 lg:col-span-3">
                  {el.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
                {/* <div className="grid lg:grid-cols-5 gap-16">
                <div className="space-y-5 lg:col-span-3">
                  {el.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
                <Image
                  className={`order-1 lg:col-span-2 h-full object-cover w-full`}
                  src={
                    `'/assets/images/'${el.image}` || "/assets/images/banking.jpg"
                  }
                  width={2000}
                  height={2000}
                  alt={`illustration for ${el.heading}`}
                />
              </div> */}
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default BlogDetails;
