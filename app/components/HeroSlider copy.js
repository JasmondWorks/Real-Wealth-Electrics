import Button from "./components/Button";
import HeroCarousel from "./components/ProductCatsCarousel";
import Navbar from "./components/Navbar";
import Link from "next/link";
import React from "react";

export default function HeroSlider() {
  return (
    <section className="text-neutral-200 relative py-0">
      {/* <div className="sticky top-0 z-10">
        <Navbar />
      </div> */}

      {/* Hero section */}
      {/* <div className="bg-[url('/assets/images/banking.jpg')] bg-cover bg-center absolute inset-0 opacity-5"></div> */}
      {/* Hero section slider */}
      <div className="container-custom py-32">
        <div className="text-center lg:text-left lg:max-w-none mx-auto grid lg:grid-cols-5 gap-5 gap-y-20 lg:gap-14 items-center">
          <div className="lg:col-span-3">
            {/* Hero copy */}
            <h1 className="mb-4 headline ">
              {/* <span className="text-primary">Precision Timing Solutions:</span>{" "}
              <br />
              GPS-Synced Clocks for Industries & Governments. */}
              <span className="text-primary">Accurate Timing</span> for Every
              Task Across Industries.
            </h1>
            <p className="text-lg leading-8 font-light text-neutral-200">
              Experience dependable time management with GPS-synced accuracy,
              designed for industrial and government excellence.
            </p>
            <div className="lg:justify-start flex-col flex gap-6 items-center mt-12">
              <Link href="#">
                <Button
                  variant="primary"
                  text="Request a Demo"
                  href="#productsCategories"
                />
              </Link>
              <p className="max-w-80 text-sm text-center lg:text-left !leading-tight text-neutral-300 font-light">
                Get a free consultation on how GPS-synced clocks can improve
                your operations.
              </p>
              {/* <Button
                className="!text-white !border-white"
                variant="secondary"
                text="Contact Us"
              /> */}
            </div>
          </div>
          {/* Hero illustration */}
          {/* <HeroCarousel /> */}
          <div className="lg:col-span-2">
            {/* <img src="/assets/images/hero-illustration.png" alt="Hero Illustration" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
