"use client";

import BlogDetails from "@/app/components/BlogDetails";
import styles from "./page.module.css";

import PageHeader from "@/app/components/PageHeader";
import SectionHeader from "@/app/components/SectionHeader";
import SectionLayout from "@/app/components/SectionLayout";
import Image from "next/image";
import React from "react";
import { useAppData } from "@/app/contexts/appContext";

const UseCases = ({ params: { usecase } }) => {
  const { useCases } = useAppData();
  const contentId = usecase.split("__")[1];
  const { title, image } = useCases.find(
    (d) => Number(d.id) === Number(contentId)
  );
  console.log(image);
  return (
    <>
      <BlogDetails
        pageRoute={usecase}
        data={useCases}
        heading={`Benefits of our products in the ${title} industry`}
        pageSubtitle="Use Case"
        pageImage={image}
      />
    </>
  );
};

export default UseCases;
