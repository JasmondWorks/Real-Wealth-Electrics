"use client";

import ImagePlaceholder from "@/app/components/ImagePlaceholder";
import PageHeader from "@/app/components/PageHeader";
import ProductSelector from "@/app/components/ProductSelector";
import ProductsVariantsSlider from "@/app/components/ProductsVariantsSlider";
import SectionHeader from "@/app/components/SectionHeader";
import SectionLayout from "@/app/components/SectionLayout";
import Link from "next/link";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

const variants = [
  {
    title: "Small",
    desc: `More suitable for small spaces (modern offices, broadcast tv stations), with images that back this up`,
  },
  {
    title: "Large",
    desc: `More suitable for big spaces (halls, airports), with images that back this up`,
  },
];

function ProductFeatures() {
  const [selectedVariantTitle, setSelectedVariantTitle] = useState(
    variants[0].title
  );
  const selectedVariant = variants.find(
    (v) => v.title.toLowerCase() === selectedVariantTitle.toLowerCase()
  );

  function handleSelectVariantTitle(title) {
    setSelectedVariantTitle(title);
  }
  return (
    <>
      {/* <SectionLayout>
        <h1 className="mb-4 text-3xl sm:text-4xl !leading-snug">
          Precision wall clock
        </h1>
        <p className="">
          Engineered for <span className="text-primary">Precision</span> -
          Designed for Visibility.
        </p>
      </SectionLayout> */}
      <PageHeader
        title="Digital Satellite Clocks"
        subtitle={<>Engineered for Precision - Designed for Visibility.</>}
      >
        {/* <div className="flex items-center justify-center gap-2 text-neutral-500">
          <Link href="/">Home</Link>
          <FaChevronRight />
          <Link href="#">Digital Satellite Clocks</Link>
        </div> */}
      </PageHeader>
      <section>
        <div className="container-custom">
          <SectionHeader title="Choose the Perfect Size for Any Environment" />
        </div>
        {/* <ImagePlaceholder text="Carousel of the different product image variants here!" /> */}
        <ProductsVariantsSlider />
      </section>
      <ProductSelector
        variants={variants.map((v) => v.title)}
        onSelectVariant={handleSelectVariantTitle}
        selectedVariant={selectedVariant.title}
      />
      <SectionLayout>
        <SectionHeader
          title={`${selectedVariant.title} variant`}
          subtitle={selectedVariant.desc}
        />
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="col-span-2">
            <ImagePlaceholder text="Primary Product image here!" />
          </div>
          <ImagePlaceholder
            text={`${selectedVariant.title} variant image 1`}
            className="!min-h-max aspect-square"
          />
          <ImagePlaceholder
            text={`${selectedVariant.title} variant image 2`}
            className="!min-h-max aspect-square"
          />
        </div>
      </SectionLayout>
      <SectionLayout>
        <SectionHeader title="Key features" />
        <div className="grid md:grid-cols-4 gap-5 gap-y-10">
          <div className="sm:col-span-2 lg:col-span-1 space-y-3">
            <ImagePlaceholder
              text="Close-Up image for specific features of the currently selected variant"
              className="min-h-max aspect-square"
            />
            <div className="space-y-1">
              <h3 className="font-semibold">Title here!</h3>
              <p className="text-sm leading-6">
                Description: Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Reprehenderit voluptas velit in?
              </p>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 space-y-3">
            <ImagePlaceholder
              text="Close-Up image for specific features of the currently selected variant"
              className="min-h-max aspect-square"
            />
            <div className="space-y-1">
              <h3 className="font-semibold">Title here!</h3>
              <p className="text-sm leading-6">
                Description: Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Reprehenderit voluptas velit in?
              </p>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 space-y-3">
            <ImagePlaceholder
              text="Close-Up image for specific features of the currently selected variant"
              className="min-h-max aspect-square"
            />
            <div className="space-y-1">
              <h3 className="font-semibold">Title here!</h3>
              <p className="text-sm leading-6">
                Description: Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Reprehenderit voluptas velit in?
              </p>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 space-y-3">
            <ImagePlaceholder
              text="Close-Up image for specific features of the currently selected variant"
              className="min-h-max aspect-square"
            />
            <div className="space-y-1">
              <h3 className="font-semibold">Title here!</h3>
              <p className="text-sm leading-6">
                Description: Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Reprehenderit voluptas velit in?
              </p>
            </div>
          </div>
        </div>
        <div className="py-10">
          <hr />
        </div>
        <div className="container-custom--sm mx-auto">
          <h3 className="font-semibold text-lg mb-5">All features</h3>
          <ul className="list-disc space-y-3">
            <li>
              <strong>Feature 1:</strong> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Aliquam similique, unde pariatur
              mollitia error perferendis.
            </li>
            <li>
              <strong>Feature 2:</strong> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Aliquam similique, unde pariatur
              mollitia error perferendis.
            </li>
            <li>
              <strong>Feature 3:</strong> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Aliquam similique, unde pariatur
              mollitia error perferendis.
            </li>
            <li>
              <strong>Feature 4:</strong> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Aliquam similique, unde pariatur
              mollitia error perferendis.
            </li>
          </ul>
        </div>
      </SectionLayout>
      <SectionLayout>
        <ImagePlaceholder text="See It in Action" />
      </SectionLayout>
    </>
  );
}

export default ProductFeatures;
