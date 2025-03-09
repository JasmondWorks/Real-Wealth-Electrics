import ProductFeatures from "@/app/components/ProductFeatures";

import React from "react";

export default function ProductPage() {
  return (
    <div className="relative">
      {/* Hero section */}

      <div>
        {/* <section className="bg-[url('/assets/images/product-illustration.jpg')] hero-bg text-white">
          <div className="absolute inset-0 hero-overlay opacity-75 pointer-events-none"></div>
          <div className="container-custom--sm relative z-30 space-y-6">
            <h1 className="mb-4 text-3xl sm:text-4xl !leading-snug">
              Engineered for <span className="text-primary">Precision</span> -
              Designed for Visibility.
            </h1>
            <p className="text-xl text-neutral-300 font-light !leading-8">
              Stay on time effortlessly with satellite-disciplined accuracy and
              displays optimized for any environment.
            </p>
          </div>
        </section> */}
        <ProductFeatures />
      </div>
    </div>
  );
}
