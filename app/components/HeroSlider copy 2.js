import Button from "./components/Button";
import HeroCarousel from "./components/ProductCatsCarousel";
import Navbar from "./components/Navbar";
import Link from "next/link";
import React from "react";

export default function HeroSlider() {
  return (
    <section className="text-neutral-200 relative py-0">
      {/* Background image */}
      <div className="bg-[url('/assets/images/banking.jpg')] bg-cover bg-center absolute inset-0 opacity-5"></div>

      {/* Navbar */}
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>

      {/* Hero section */}
      <div
        style={{
          backgroundImage:
            "linearGradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        }}
        className="container-custom !mx-0 w-1/2"
      >
        <div className="lg:col-span-3">
          {/* Hero copy */}
          <h1 className="mb-4 headline ">
            {/* <span className="text-primary">Precision Timing Solutions:</span>{" "}
                <br />
                GPS-Synced Clocks for Industries & Governments. */}
            <span className="text-primary">Accurate Timing</span> for Every Task
            Across Industries.
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
              Get a free consultation on how GPS-synced clocks can improve your
              operations.
            </p>
            {/* <Button
                  className="!text-white !border-white"
                  variant="secondary"
                  text="Contact Us"
                /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
